"use client";

import { useEffect, useRef } from "react";

export function GridBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const gridSize = 60;
    const speed = 2; // Pixels per frame. Must evenly divide gridSize!

    const snapToGrid = (val: number) => Math.floor(val / gridSize) * gridSize;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      history: {x: number, y: number}[];

      constructor() {
        this.x = snapToGrid(Math.random() * width);
        this.y = snapToGrid(Math.random() * height);
        
        // Random initial direction
        const dirs = [
          [speed, 0], [-speed, 0], [0, speed], [0, -speed]
        ];
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        this.vx = dir[0];
        this.vy = dir[1];
        
        this.length = Math.floor(Math.random() * 40) + 20; // Length of the light beam
        this.history = [];
      }

      update() {
        this.history.unshift({ x: this.x, y: this.y });
        if (this.history.length > this.length) {
          this.history.pop();
        }

        this.x += this.vx;
        this.y += this.vy;

        // Check if we are at an intersection
        if (this.x % gridSize === 0 && this.y % gridSize === 0) {
          // 30% chance to turn
          if (Math.random() < 0.3) {
            const options = this.vx === 0 
              ? [[speed, 0], [-speed, 0]] 
              : [[0, speed], [0, -speed]];
            const dir = options[Math.floor(Math.random() * options.length)];
            this.vx = dir[0];
            this.vy = dir[1];
          }
        }

        // Out of bounds reset
        if (this.x < -gridSize || this.x > width + gridSize || this.y < -gridSize || this.y > height + gridSize) {
          this.x = snapToGrid(Math.random() * width);
          this.y = snapToGrid(Math.random() * height);
          this.history = [];
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.history.length < 2) return;

        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        
        const gradient = ctx.createLinearGradient(
          this.history[0].x, this.history[0].y, 
          this.history[this.history.length - 1].x, this.history[this.history.length - 1].y
        );
        // The head is bright emerald, fading to transparent
        gradient.addColorStop(0, "rgba(0, 255, 102, 1)"); 
        gradient.addColorStop(1, "rgba(0, 255, 102, 0)");
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00FF66";
        ctx.stroke();
        
        // Draw the very bright "head" of the beam
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }
    }

    const particles = Array.from({ length: 40 }, () => new Particle());

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
