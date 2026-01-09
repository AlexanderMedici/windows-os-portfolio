import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import playerIcon from "../assets/images/player.png";
import moonlight from "../assets/images/Classicals.de-Beethoven-Moonlight-Sonata-1.-Movement-Sonata-Nr.-14,-Op.-27,-Nr.-2.mp3";
import vivaldi from "../assets/images/Classicals.de - Vivaldi - Cello Sonata No. 5 in E minor - 4. Allegro - RV 40 (Telemann Trio).mp3";
import beethoven from "../assets/images/Classicals.de - Beethoven - Symphony No. 7, Op. 92 - II. Allegretto - Arranged for Harpsichord.mp3";

const formatTime = (value) => {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const MusicPlayer = () => {
  const tracks = useMemo(
    () => [
      {
        title: "Moonlight Sonata",
        artist: "Beethoven",
        src: moonlight,
      },
      {
        title: "Cello Sonata No. 5",
        artist: "Vivaldi",
        src: vivaldi,
      },
      {
        title: "Symphony No. 7",
        artist: "Beethoven",
        src: beethoven,
      },
    ],
    []
  );

  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = tracks[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  }, [tracks.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  }, [tracks.length]);

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  };

  const handleSelectTrack = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const nextTime = Math.min(Math.max(percent, 0), 1) * duration;
    audio.currentTime = nextTime;
    setProgress(nextTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentTrack.src;
    audio.load();
    setProgress(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack.src, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleLoaded = () => setDuration(audio.duration || 0);
    const handleEnded = () => handleNext();

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [handleNext]);

  return (
    <div className="h-full w-full bg-[#0d1512]">
      <audio ref={audioRef} preload="metadata" />
      <div className="flex h-full flex-col">
        <header className="border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <img src={playerIcon} alt="Player" className="h-9 w-9 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">
                Player
              </p>
              <h2 className="text-base sm:text-lg font-semibold text-white">
                Now Playing
              </h2>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col lg:flex-row min-h-0">
          <aside className="lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0b1210]">
            <div className="px-4 py-4">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
                Library
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {tracks.map((track, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <li
                      key={track.title}
                      className={`rounded-md px-3 py-2 cursor-pointer transition-colors ${
                        isActive ? "bg-white/10 text-white" : "hover:bg-white/5"
                      }`}
                      onClick={() => handleSelectTrack(index)}
                    >
                      <div className="text-sm truncate">{track.title}</div>
                      <div className="text-xs text-white/50 truncate">
                        {track.artist}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-4">
                <div className="rounded-xl bg-[#12201a] border border-white/10 p-4">
                  <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-emerald-500/40 via-emerald-600/20 to-slate-900/80 flex items-center justify-center">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-base font-semibold text-white">
                      {currentTrack.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {currentTrack.artist}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
                    <span className="rounded-full bg-emerald-500/20 px-2 py-1">
                      {isPlaying ? "Playing" : "Paused"}
                    </span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#101a15] border border-white/10 p-4 flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-white/50 mb-2">
                      Up Next
                    </h4>
                    <div className="space-y-2">
                      {tracks.map((track, index) => (
                        <div
                          key={`${track.title}-queue`}
                          className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-1.5"
                        >
                          <div className="min-w-0">
                            <p className="text-sm text-white truncate">
                              {track.title}
                            </p>
                            <p className="text-xs text-white/50 truncate">
                              {track.artist}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="text-xs text-emerald-300 hover:text-emerald-200"
                            onClick={() => handleSelectTrack(index)}
                          >
                            Play
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#0b1210] border border-white/10 p-3">
                    <p className="text-xs uppercase tracking-wide text-white/40">
                      Progress
                    </p>
                    <div className="mt-3">
                      <div
                        className="h-2 w-full rounded-full bg-white/10 cursor-pointer"
                        onClick={handleSeek}
                      >
                        <div
                          className="h-2 rounded-full bg-emerald-400"
                          style={{
                            width: duration
                              ? `${(progress / duration) * 100}%`
                              : "0%",
                          }}
                        ></div>
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-white/50">
                        <span>{formatTime(progress)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <button
                        type="button"
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 hover:bg-white/10"
                      >
                        Shuffle
                      </button>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
                          onClick={handlePrev}
                          aria-label="Previous"
                        >
                          ◀
                        </button>
                        <button
                          type="button"
                          className="h-10 w-10 rounded-full bg-emerald-400 text-black font-semibold"
                          onClick={handlePlayPause}
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? "❚❚" : "▶"}
                        </button>
                        <button
                          type="button"
                          className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20"
                          onClick={handleNext}
                          aria-label="Next"
                        >
                          ▶
                        </button>
                      </div>
                      <button
                        type="button"
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60 hover:bg-white/10"
                      >
                        Repeat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
