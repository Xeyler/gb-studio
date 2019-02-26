export const EVENT_END = "EVENT_END";
export const EVENT_WAIT = "EVENT_WAIT";

// Scenes
export const EVENT_SWITCH_SCENE = "EVENT_SWITCH_SCENE";
export const EVENT_START_BATTLE = "EVENT_START_BATTLE";
export const EVENT_RETURN_TO_TITLE = "EVENT_RETURN_TO_TITLE";

// Conditional
export const EVENT_IF_FLAG = "EVENT_IF_FLAG";
export const EVENT_SET_FLAG = "EVENT_SET_FLAG";
export const EVENT_CLEAR_FLAG = "EVENT_CLEAR_FLAG";

// Actor
export const EVENT_TEXT = "EVENT_TEXT";
export const EVENT_ACTOR_SET_DIRECTION = "EVENT_ACTOR_SET_DIRECTION";
export const EVENT_ACTOR_SET_POSITION = "EVENT_ACTOR_SET_POSITION";
export const EVENT_ACTOR_MOVE_TO = "EVENT_ACTOR_MOVE_TO";
export const EVENT_ACTOR_EMOTION = "EVENT_ACTOR_EMOTION";

// Camera
export const EVENT_CAMERA_MOVE_TO = "EVENT_CAMERA_MOVE_TO";
export const EVENT_CAMERA_LOCK = "EVENT_CAMERA_LOCK";
export const EVENT_CAMERA_SHAKE = "EVENT_CAMERA_SHAKE";
export const EVENT_FADE_OUT = "EVENT_FADE_OUT";
export const EVENT_FADE_IN = "EVENT_FADE_IN";
export const EVENT_SHOW_SPRITES = "EVENT_SHOW_SPRITES";
export const EVENT_HIDE_SPRITES = "EVENT_HIDE_SPRITES";
export const EVENT_SHOW_PLAYER = "EVENT_SHOW_PLAYER";
export const EVENT_HIDE_PLAYER = "EVENT_HIDE_PLAYER";

const trim2lines = string => {
  return string
    .replace(/^([^\n]*\n[^\n]*)[\w\W]*/g, "$1")
    .split("\n")
    .map(line => line.substring(0, 18))
    .join("\n");
};

export const EventNames = {
  [EVENT_SWITCH_SCENE]: "Switch Scene",
  [EVENT_WAIT]: "Wait",
  [EVENT_CAMERA_SHAKE]: "Camera Shake",
  [EVENT_IF_FLAG]: "If Flag",
  [EVENT_SET_FLAG]: "Set Flag",
  [EVENT_CLEAR_FLAG]: "Clear Flag",
  [EVENT_TEXT]: "Display Text",
  [EVENT_CAMERA_MOVE_TO]: "Camera Move To",
  [EVENT_CAMERA_LOCK]: "Camera Lock To Player",
  [EVENT_FADE_IN]: "Fade In",
  [EVENT_FADE_OUT]: "Fade Out",
  [EVENT_ACTOR_SET_DIRECTION]: "Actor Set Direction",
  [EVENT_ACTOR_SET_POSITION]: "Actor Set Position",
  [EVENT_ACTOR_MOVE_TO]: "Actor Move To",
  [EVENT_ACTOR_EMOTION]: "Emotion Bubble",
  [EVENT_RETURN_TO_TITLE]: "Return To Title",
  [EVENT_SHOW_PLAYER]: "Show Player",
  [EVENT_HIDE_PLAYER]: "Hide Player",
  [EVENT_SHOW_SPRITES]: "Show Sprites",
  [EVENT_HIDE_SPRITES]: "Hide Sprites"
};

export const EventFields = {
  [EVENT_SWITCH_SCENE]: [
    {
      key: "sceneId",
      type: "scene"
    },
    {
      key: "x",
      label: "X",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "y",
      label: "Y",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "direction",
      label: "Direction",
      type: "direction",
      width: "50%"
    },
    {
      key: "fadeSpeed",
      label: "Fade Speed",
      type: "fadeSpeed",
      width: "50%"
    }
  ],
  [EVENT_WAIT]: [
    {
      key: "time",
      type: "number",
      label: "Seconds",
      min: 0,
      max: 4,
      step: 0.1
    }
  ],
  [EVENT_CAMERA_SHAKE]: [
    {
      key: "time",
      type: "number",
      label: "Seconds",
      min: 0,
      max: 4
    }
  ],
  [EVENT_IF_FLAG]: [
    {
      key: "flag",
      type: "flag"
    }
  ],
  [EVENT_SET_FLAG]: [
    {
      key: "flag",
      type: "flag"
    }
  ],
  [EVENT_CLEAR_FLAG]: [
    {
      key: "flag",
      type: "flag"
    }
  ],
  [EVENT_TEXT]: [
    {
      key: "text",
      type: "textarea",
      rows: 2,
      maxPerLine: 18,
      placeholder: "Text...",
      updateFn: trim2lines
    }
  ],
  [EVENT_CAMERA_MOVE_TO]: [
    {
      key: "x",
      label: "X",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "y",
      label: "Y",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "speed",
      type: "cameraSpeed"
    }
  ],
  [EVENT_CAMERA_LOCK]: [
    {
      key: "speed",
      type: "cameraSpeed"
    }
  ],
  [EVENT_FADE_IN]: [
    {
      key: "speed",
      type: "fadeSpeed"
    }
  ],
  [EVENT_FADE_OUT]: [
    {
      key: "speed",
      type: "fadeSpeed"
    }
  ],
  [EVENT_ACTOR_SET_DIRECTION]: [
    {
      key: "actorId",
      type: "actor"
    },
    {
      key: "direction",
      type: "direction"
    }
  ],
  [EVENT_ACTOR_SET_POSITION]: [
    {
      key: "actorId",
      type: "actor"
    },
    {
      key: "x",
      label: "X",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "y",
      label: "Y",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    }
  ],
  [EVENT_ACTOR_MOVE_TO]: [
    {
      key: "actorId",
      type: "actor"
    },
    {
      key: "x",
      label: "X",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    },
    {
      key: "y",
      label: "Y",
      type: "number",
      min: 0,
      max: 32,
      width: "50%"
    }
  ],
  [EVENT_ACTOR_EMOTION]: [
    {
      key: "actorId",
      type: "actor"
    },
    {
      key: "emotionId",
      type: "emotion"
    }
  ],
  [EVENT_RETURN_TO_TITLE]: [],
  [EVENT_SHOW_PLAYER]: [],
  [EVENT_HIDE_PLAYER]: [],
  [EVENT_SHOW_SPRITES]: [],
  [EVENT_HIDE_SPRITES]: []
};