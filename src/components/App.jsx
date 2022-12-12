import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function CreateEmoji(emojis) {
  return (
    <Emoji
      Key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
