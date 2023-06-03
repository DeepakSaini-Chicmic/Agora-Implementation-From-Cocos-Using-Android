import { _decorator, Component, native, Node, sys } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  @property(Node) view: Node;
  start() {
    this.view.active = false;
  }

  joinCall() {
    console.log("Channel Join Call");
    if (sys.os === sys.OS.ANDROID) {
      console.log("In Android");
      native.reflection.callStaticMethod(
        "com/cocos/game/AppActivity",
        "agoraCallFromCocosToJoinChannel",
        "()V"
      );
    }
  }

  leaveCall() {
    console.log("Channel Leave Call");
    if (sys.os === sys.OS.ANDROID) {
      console.log("In Android");
      native.reflection.callStaticMethod(
        "com/cocos/game/AppActivity",
        "agoraCallFromCocosToLeaveChannel",
        "()V"
      );
    }
  }

  callRecievedFromAndroid() {
    console.log("FINISHED");
  }
  update(deltaTime: number) {}
}
