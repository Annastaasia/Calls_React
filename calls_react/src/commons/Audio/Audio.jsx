import { useState } from "react";
import styles from "./audio.module.scss";
import DownloadAudio from "../../assets/SVG/DownloadAudio.svg";
import playaudio from "../../assets/images/playaudio.svg";
import Stopaudio from "../../assets/images/Stopaudio.svg";
import Closeaudio from "../../assets/SVG/Closeaudio.svg";

export default function AudioPlayer(props) {
  function Enter() {
    !audio && fetchAudio(props.record_id);
  }

  let ctx;
  let playSound;

  function fetchAudio(record_id) {
    ctx = new AudioContext();
    playSound = ctx.createBufferSource();
    fetch("https://api.skilla.ru/mango/getRecord?record=" + record_id, {
      method: "POST",
      headers: { Authorization: "Bearer testtoken" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((data) => {
        return ctx.decodeAudioData(data);
      })

      .then((data) => {
        playSound.buffer = data;
        playSound.connect(ctx.destination);
        setaudio(playSound);
      });
  }

  const [audio, setaudio] = useState(null);
  const [isPlay, setPlay] = useState(false);

  function PlayStopToogle() {
    if (audio) {
      !isPlay ? audio.start() : audio.stop();
      setPlay(!isPlay);
    }
  }

  return (
    <div
      className={styles.player}
      onMouseEnter={() => {
        Enter();
      }}
    >
      <div className={styles.time}>{props.time}</div>
      <div
        className={styles.playStopButton}
        onClick={() => {
          PlayStopToogle();
        }}
      >
        <img
          className={styles.playIcon}
          src={isPlay ? Stopaudio : playaudio}
          alt="PlayIcon"
        />
      </div>
      <div className={styles.progressLine}></div>
      <div className={styles.iconForPlayer}>
        <img src={DownloadAudio} alt="DownloadAudio" />
      </div>
      <div className={styles.iconForPlayer}>
        <img src={Closeaudio} alt="CloseAudio" />
      </div>
    </div>
  );
}
