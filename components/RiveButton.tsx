import { useCallback } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function RiveButton() {
  const { rive, RiveComponent } = useRive({
    src: "/hero_use_case.riv",
    artboard: "Button",
    stateMachines: "State Machine 1",
    autoplay: true,
    shouldDisableRiveListeners: true,
  });

  const isHoverInput = useStateMachineInput(rive, "State Machine 1", "isHover");

  const onButtonActivate = useCallback(() => {
    if (rive && isHoverInput) {
      isHoverInput.value = true;
    }
  }, [rive, isHoverInput]);

  const onButtonDeactivate = useCallback(() => {
    if (rive && isHoverInput) {
      isHoverInput.value = false;
    }
  }, [rive, isHoverInput]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <h1
        className="text-white text-5xl lg:text-6xl pb-2"
        style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}
      >
        Explore Social 
        <br/>
        Media Verses
      </h1>
      <div className="rive-button-container relative w-2/4 pt-[25%] pr-1 mx-auto">
        <div className="absolute top-4 left-0 bottom-0 right-0">
          <a
            href="https://vidvers.vercel.app/"
            aria-label="Vidvers Website"
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center 
            justify-center w-full h-full font-semibold text-xl lg:text-4xl md:text-2xl bg-violet-500 
            text-white rounded-full shadow-sm hover:bg-fuchsia-600 hover:scale-125
            hover:shadow-[0px_10px_20px_rgba(39,_224,_245,_0.8)] hover:border-4 border-emerald-100 transition duration-500 ease-in-out"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 1)" }}
            // onMouseEnter={onButtonActivate}
            // onMouseLeave={onButtonDeactivate}
            // onFocus={onButtonActivate}
            // onBlur={onButtonDeactivate}
          >
            VIDVERS
          </a>
          {/* <RiveComponent aria-hidden="true" /> */}
        </div>
      </div>
      <div className="rive-button-container relative w-2/4 pt-[25%] mx-auto">
        <div className="absolute top-4 left-0 bottom-0 right-0">
          <a
            href="https://solverses.netlify.app/"
            aria-label="Solverses Website"
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center 
            justify-center w-full h-full font-semibold text-xl lg:text-4xl md:text-2xl bg-violet-500 
            text-white rounded-full shadow-sm hover:bg-fuchsia-600 hover:scale-125 
            hover:shadow-[0px_10px_20px_rgba(39,_224,_245,_0.8)] hover:border-4 border-emerald-100 transition duration-500 ease-in-out"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 1)" }}
            // onMouseEnter={onButtonActivate}
            // onMouseLeave={onButtonDeactivate}
            // onFocus={onButtonActivate}
            // onBlur={onButtonDeactivate}
          >
            SOLVERS
          </a>
          {/* <RiveComponent aria-hidden="true" /> */}
        </div>
      </div>
    </div>
  );
}
