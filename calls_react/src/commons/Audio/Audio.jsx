import { useState } from "react";
import styles from "./AudioPlayer.module.css";
import DownloadIcon from "../../icons/DownloadIcon.svg";
import PlayIcon from "../../icons/PlayIcon.svg";
import StopIcon from "../../icons/StopIcon.svg";
import CloseIcon from "../../icons/CloseIcon.svg";

export default function AudioPlayer(props) {
  function Enter() {
    !audio && fetchAudio(props.record_id);
  }

  let ctx = "";
  let playSound = "";

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

  const [audio, setaudio] = useState < "" > null;
  const [isPlay, setPlay] = useState < "" > false;

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
          src={isPlay ? StopIcon : PlayIcon}
          alt=""
        />
      </div>
      <div className={styles.progressLine}></div>
      <div className={styles.iconForPlayer}>
        <img src={DownloadIcon} alt="" />
      </div>
      <div className={styles.iconForPlayer}>
        <img src={CloseIcon} alt="" />
      </div>
    </div>
  );
}
