import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face with Big Eyes",
  "😃": "Grinning Face with Smiling Eyes",
  "😄": "Beaming Face with Smiling Eyes",
  "😁": "Grinning Squinting Face",
  "😆": "Grinning Face with Sweat",
  "😅": "Rolling on the Floor Laughing",
  "🤣": "Face with Tears of Joy",
  "😂": "Slightly Smiling Face",
  "🙂": "Upside-Down Face",
  "🙃": "Winking Face",
  "😉": "Smiling Face with Smiling Eyes",
  "😊": "Smiling Face with Halo",
  "😇": "Smiling Face with Hearts",
  "🥰": "Smiling Face with Heart-Eyes",
  "😍": "Star-Struck",
  "🤩": "Face Blowing a Kiss",
  "😘": "Kissing Face",
  "😗": "Smiling Face",
  "☺️": "Kissing Face with Closed Eyes",
  "😚": "Kissing Face with Smiling Eyes",
  "😙": "Smiling Face with Tear",
  "🥲": "Face Savoring Food",
  "😋": "Face with Tongue",
  "😛": "Winking Face with Tongue",
  "😜": "Zany Face",
  "🤪": "Squinting Face with Tongue"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "eee kaa hai!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>eee kaun sa Emoji hai?</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
