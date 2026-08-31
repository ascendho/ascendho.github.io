type ProjectDemoPlayerProps = {
  src: string;
  posterSrc: string;
  title: string;
};

export function ProjectDemoPlayer({ src, posterSrc, title }: ProjectDemoPlayerProps) {
  return (
    <div className="demo-player">
      <video
        className="demo-video"
        src={src}
        poster={posterSrc}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        你的浏览器不支持 HTML5 视频播放。
      </video>
    </div>
  );
}
