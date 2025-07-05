import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import photo1 from "./assets/KakaoTalk_20250705_142051175.jpg";
import photo2 from "./assets/KakaoTalk_20250705_142056709.jpg";

const letters = [
  {
    name: "현수",
    photo: photo1,
    message: `🎂 현수 님, 생일 축하해요! 🎉\n오늘 하루 행복만 가득하길!`,
    bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    color: "#5a2a27",
  },
  {
    name: "지민",
    photo: photo2,
    message: `🎂 지민 님, 멋진 하루 보내세요! 🌟\n항상 행복하세요!`,
    bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    color: "#264653",
  },
  {
    name: "민준",
    photo: "https://placedog.net/300/200",
    message: `🎂 민준 님, 최고의 생일 되세요! 🎉\n건강과 행복을 빕니다!`,
    bg: "linear-gradient(135deg, #fbc7aa 0%, #f8b195 100%)",
    color: "#6f4e37",
  },
  {
    name: "서연",
    photo: "https://placebeard.it/300/200",
    message: `🎂 서연 님, 행복한 생일 보내세요! 🎈\n늘 웃음 가득하세요!`,
    bg: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    color: "#2a4d14",
  },
  {
    name: "지우",
    photo: "https://baconmockup.com/300/200",
    message: `🎂 지우 님, 즐거운 생일 보내세요! 🎁\n항상 사랑받는 하루 되길!`,
    bg: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
    color: "#5a3e00",
  },
  {
    name: "도현",
    photo: "https://placekitten.com/301/201",
    message: `🎂 도현 님, 행복 가득한 생일 되세요! 🎉\n멋진 한 해 되길 바랍니다!`,
    bg: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    color: "#004d5a",
  },
];

function Card({ photo, message, bg, color, name }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1000px",
        width: "100%",
        maxWidth: 320,
        aspectRatio: "3 / 2", // 가로:세로 비율 3:2 유지
        cursor: "pointer",
        flex: "1 1 300px",
        minWidth: 260,
      }}
      title={`Click to ${isFlipped ? "show photo" : "read message"}`}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "none",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        {/* 앞면 */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "15px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "filter 0.3s ease",
          }}
          className="hover-darken"
        >
          <img
            src={photo}
            alt={`${name} 사진`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* 뒷면 */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: bg,
            color: color,
            borderRadius: "15px",
            padding: "1rem",
            boxSizing: "border-box",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            whiteSpace: "pre-wrap",
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", // 반응형 폰트
            userSelect: "none",
          }}
        >
          <strong style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}>
            🎂 {name} 님, 생일 축하해요! 🎉
          </strong>
          <p style={{ marginTop: "0.5rem", flexGrow: 1 }}>{message}</p>
          <small style={{ fontFamily: "'Courier New', monospace" }}>
            {`console.log("Happy Birthday ${name}!");`}
          </small>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        backgroundColor: "#111",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <div style={{ fontSize: "2rem" }}>로딩 중...</div>
      ) : !showMessage ? (
        <>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            🎉 Happy Birthday! 🎂
          </h1>
          <button
            style={{
              padding: "0.7rem 1.5rem",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#ff4081",
              color: "#fff",
              marginTop: "2rem",
              transition: "background 0.3s",
            }}
            onClick={() => setShowMessage(true)}
          >
            깜짝 선물 보기
          </button>
          <Confetti width={dimensions.width} height={dimensions.height} />
        </>
      ) : (
        <>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "2rem",
              color: "#fff",
              textShadow: "0 0 15px #ff69b4",
            }}
          >
            🎉 오늘 하루 버그 없이 행복만 가득하길! 😄 🎂
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              maxWidth: "1200px",
              marginTop: "2rem",
            }}
          >
            {letters.map(({ name, photo, message, bg, color }) => (
              <Card
                key={name}
                name={name}
                photo={photo}
                message={message}
                bg={bg}
                color={color}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
