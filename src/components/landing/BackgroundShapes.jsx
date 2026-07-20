export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layered black/grey fuzzy shapes */}
      <div className="absolute -top-48 -left-48 w-[680px] h-[680px] rounded-full bg-foreground/[0.08] blur-[120px]" />
      <div className="absolute top-1/4 -right-40 w-[560px] h-[560px] rounded-full bg-foreground/[0.06] blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[760px] h-[460px] rounded-full bg-foreground/[0.09] blur-[130px]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-[45%] bg-foreground/[0.05] blur-[110px] rotate-12" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-[40%] bg-foreground/[0.07] blur-[100px] -rotate-6" />
      <div className="absolute top-1/3 left-1/3 w-[420px] h-[420px] rounded-full bg-foreground/[0.04] blur-[120px]" />
      <div className="absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-full bg-foreground/[0.06] blur-[140px]" />
    </div>
  );
}