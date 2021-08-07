const lightbox = GLightbox({
  href: "https://www.youtube.com/watch?v=cpP-fCo8Dn4&ab_channel=PatrickBourckel",
  type: "video",
  source: "youtube",
  width: 900,

  plyr: {
    config: {
      ratio: "16:9", // or '4:3'
      muted: true,
      hideControls: true,
    },
  },
});
