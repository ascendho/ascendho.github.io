type ProjectDemoPlayerProps = {
  src: string;
  posterSrc: string;
  title: string;
};

export function ProjectDemoPlayer({ src, posterSrc, title }: ProjectDemoPlayerProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-[1.35rem] border border-[var(--line-soft)] bg-[rgba(247,251,248,0.94)]">
        <video
          className="block aspect-[1920/1110] w-full bg-[rgba(239,246,240,0.92)] object-contain"
          src={src}
          poster={posterSrc}
          controls
          playsInline
          preload="metadata"
        >
          你的浏览器不支持 HTML5 视频播放。
        </video>
      </div>

      <p lang="zh-CN" className="cn-songti-copy text-sm leading-6 text-[var(--muted)]">
        点击即可播放 {title}，播放器控件支持调整进度、音量与全屏观看。
      </p>
    </div>
  );
}