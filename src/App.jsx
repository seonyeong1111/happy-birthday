import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import photo1 from "./assets/KakaoTalk_20250709_155224428.jpg";
import photo2 from "./assets/KakaoTalk_20250709_160756042.jpg";
import photo3 from "./assets/KakaoTalk_20250709_012920523.jpg";
import photo4 from "./assets/KakaoTalk_20250709_013203825.jpg";
import photo5 from "./assets/KakaoTalk_20250709_015502016.jpg";
import photo6 from "./assets/KakaoTalk_20250709_013223112.jpg";

const letters = [
  {
    name: "현수",
    photo: photo1,
    message: `정호님 생일 이벤트 같이 열심히 준비했는데 자기 생일에는 본가로 가시면 어떡해요!! 좋아하는 베트남 쌀국수 사드릴게요 같이 먹어요!><`,
    bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    color: "#5a2a27",
  },
  {
    name: "지우",
    photo: photo2,
    message: `현수행님 생축입니다!! 맛난 거 많이 드시고 행복한 하루 보내세요🥳`,
    bg: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)",
    color: "#5a3e00",
  },
  {
    name: "민준",
    photo: photo3,
    message: `학교오시면 돈까스 대접할게요~~`,
    bg: "linear-gradient(135deg, #fbc7aa 0%, #f8b195 100%)",
    color: "#6f4e37",
  },
  {
    name: "서연",
    photo: photo4,
    message: `현수형 생일 축하드립니다 방학 때 같이 놀러가요~~~ `,
    bg: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    color: "#2a4d14",
  },
  {
    name: "지민",
    photo: photo6,
    message: `생일축하합니다~~~~!!~~!~!@@!~!@~!@~!@~!@~@!~@!~!@~@!~@!
행복한 생일 되시고 무탈한 하루 되시고 맛있는거 많이 드시는 식사 가지시고 강녕한 날 되십셔`,
    bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    color: "#264653",
  },
  {
    name: "도현",
    photo: photo5,
    message: `안녕하세요 구름톤 백앤드 파트장 서정호입니다. 너무 잘하고 계세요 앞으로도 파이팅~~`,
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
            🎂 생일 축하해요! 🎉
          </strong>
          <p style={{ marginTop: "0.5rem", flexGrow: 1 }}>{message}</p>
          <small style={{ fontFamily: "'Courier New', monospace" }}>
            {`console.log("Happy Birthday");`}
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
