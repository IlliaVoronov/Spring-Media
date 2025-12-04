
import { useEffect, useRef, useState } from 'react';
import BookCallButton from './CalendyButton';

const Landing = () => {

  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update progress based on video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-10 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/logo.jpg" alt="logo" className='rounded-2xl' />
            </div>
            <span className="text-2xl font-bold text-gray-900">Spring Media</span>
          </div>

          {/* Menu Button */}
          <button className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-colors">
            <div className="flex flex-col gap-1.5">
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="relative z-10 px-6 md:px-12 lg:px-20 flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center space-y-8">

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-none">
                  Social Media
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none flex flex-nowrap items-center gap-3">
                  <span className="text-gray-900">Das </span>
                  <span className="text-emerald-500 whitespace-nowrap">Raus Sticht</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg flex md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Wir übernehmen deinen kompletten Social-Media-Auftritt und machen deine Marke auf Instagram, TikTok & Co. erfolgreich.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <BookCallButton />
              </div>
            </div>

            {/* Right Video Container*/}
            <div className="relative  flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] aspect-9/16 rounded-3xl overflow-hidden shadow-2xl bg-black">
                {/* Video element */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster=""
                >
                  <source src="/testVideo.mp4" type="video/mp4" />
                </video>

                {/* Instagram Story Overlay Elements */}
                {/* Top Gradient Overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/50 to-transparent z-10 pointer-events-none" />

                {/* Story Progress Bar - Synced with video */}
                <div className="absolute top-3 left-3 right-3 z-20">
                  <div className="h-0.5 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Profile Info (Instagram style) */}
                <div className="absolute top-8 left-4 z-20 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center ">
                      <img src="/logo.jpg" alt="logo" className='w-9 h-9 rounded-full'/>
                    </div>
                  <span className="text-white font-semibold text-sm drop-shadow-lg">springmediaagency</span>
                </div>

                {/* Mute/Unmute Button*/}
                <button
                  onClick={toggleMute}
                  className="absolute top-6 right-4 z-20 w-14 h-14 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 shadow-2xl group"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg aria-label="Audio is muted" className='text-white'  fill="currentColor" height="16" role="img" viewBox="0 0 48 48" width="16"><title>Audio is muted</title><path clip-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill-rule="evenodd"></path></svg>
                    // <svg
                    //   className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                    //   fill="none"
                    //   viewBox="0 0 24 24"
                    //   stroke="currentColor"
                    //   strokeWidth="2"
                    // >
                    //   <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    //   <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    // </svg>
                  ) : (
                    <svg aria-label="Audio is playing" className='text-white' fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Audio is playing</title><path d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"></path></svg>
                      
                  )}
                </button>

                {/* Mute Indicator Badge */}
                {isMuted && (
                  <div className="absolute top-22 right-4 z-20 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-xl  animate-pulse">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
                    </svg>
                    Tap to unmute
                  </div>
                )}
              </div>
            </div>
            {/* END Right Video Container*/}

          </div>
        </div>
      </main>
      {/* Über Uns Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-center items-center">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
            </svg>
            <span className="text-gray-600 font-medium">Über Uns</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20 leading-tight max-w-5xl mx-auto">
            Social Media als starken Kommunikationskanal, der planbar{' '}
            <span className="text-emerald-500">Aufträge</span> und{' '}
            <span className="text-emerald-500">Bewerber</span> generiert.
          </h2>

          {/* Stats Grid */}
          <div className="flex h-30 gap-4 items-center border border-gray-100 bg-white/50 rounded-3xl max-w-full ">
            {/* Stat 1 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                150+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Content Geliefert
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                20+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Kunden Geholfen
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-6xl lg:text-7xl font-bold text-emerald-500">
                250K+
              </div>
              <div className="text-md md:text-xl text-gray-500 font-medium">
                Totale Aufrufe
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

<svg aria-label="Audio is muted"  fill="currentColor" height="16" role="img" viewBox="0 0 48 48" width="16"><title>Audio is muted</title><path clip-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill-rule="evenodd"></path></svg>