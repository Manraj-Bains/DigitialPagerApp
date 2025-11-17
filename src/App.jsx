import React, { useState } from "react";
import Layout from "./components/Layout";
import BottomNav from "./components/BottomNav";

import WelcomeScreen from "./screens/WelcomeScreen";
import MethodScreen from "./screens/MethodScreen";
import FormScreen from "./screens/FormScreen";
import QueueConfirmScreen from "./screens/QueueConfirmScreen";
import LiveQueueScreen from "./screens/LiveQueueScreen";
import NotifyScreen from "./screens/NotifyScreen";
import TableReadyScreen from "./screens/TableReadyScreen";
import HostNotifiedScreen from "./screens/HostNotifiedScreen";
import ProofForHostScreen from "./screens/ProofForHostScreen";
import DoneScreen from "./screens/DoneScreen";

export const SCREENS = {
  WELCOME: "WELCOME",
  METHOD: "METHOD",
  FORM: "FORM",
  QUEUE_CONFIRM: "QUEUE_CONFIRM",
  LIVE_QUEUE: "LIVE_QUEUE",
  NOTIFY: "NOTIFY",
  TABLE_READY: "TABLE_READY",
  HOST_NOTIFIED: "HOST_NOTIFIED",
  PROOF_FOR_HOST: "PROOF_FOR_HOST",
  DONE: "DONE",
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.WELCOME);

  const [guestName, setGuestName] = useState("");
  const [partySize, setPartySize] = useState("");
  const [carInfo, setCarInfo] = useState("");

  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  const goTo = (screen) => setCurrentScreen(screen);

  const handleFormSubmit = () => {
    if (!guestName.trim() || !partySize.trim()) {
      showToast("Please complete name and party size before continuing.");
      return;
    }
    setCurrentScreen(SCREENS.QUEUE_CONFIRM);
  };

  // Back button logic
  const BACK_DISABLED = [SCREENS.WELCOME];
  const showBack = !BACK_DISABLED.includes(currentScreen);

  const handleBack = () => {
    if (currentScreen === SCREENS.METHOD) {
      return setCurrentScreen(SCREENS.WELCOME);
    }
    if (currentScreen === SCREENS.FORM) {
      return setCurrentScreen(SCREENS.METHOD);
    }
    if (currentScreen === SCREENS.QUEUE_CONFIRM) {
      return setCurrentScreen(SCREENS.FORM);
    }
    if (currentScreen === SCREENS.LIVE_QUEUE) {
      return setCurrentScreen(SCREENS.QUEUE_CONFIRM);
    }
    if (currentScreen === SCREENS.NOTIFY) {
      return setCurrentScreen(SCREENS.LIVE_QUEUE);
    }
    if (currentScreen === SCREENS.TABLE_READY) {
      return setCurrentScreen(SCREENS.NOTIFY);
    }
    if (currentScreen === SCREENS.HOST_NOTIFIED) {
      return setCurrentScreen(SCREENS.TABLE_READY);
    }
    if (currentScreen === SCREENS.PROOF_FOR_HOST) {
      return setCurrentScreen(SCREENS.HOST_NOTIFIED);
    }

    setCurrentScreen(SCREENS.WELCOME);
  };

  let ScreenComponent = null;

  switch (currentScreen) {
    // 1. Start Check-in (your first Figma screen)
    case SCREENS.WELCOME:
      ScreenComponent = (
        <WelcomeScreen
          onStart={() => goTo(SCREENS.METHOD)}
        />
      );
      break;

    // 2. Check-In Method (Scan QR or Enter Code Manually)
    case SCREENS.METHOD:
      ScreenComponent = (
        <MethodScreen
          onConfirmScan={() => goTo(SCREENS.FORM)}
          onEnterCode={() => goTo(SCREENS.FORM)}
        />
      );
      break;

    // 3. Check-In Details form
    case SCREENS.FORM:
      ScreenComponent = (
        <FormScreen
          guestName={guestName}
          partySize={partySize}
          carInfo={carInfo}
          setGuestName={setGuestName}
          setPartySize={setPartySize}
          setCarInfo={setCarInfo}
          onSubmit={handleFormSubmit}
        />
      );
      break;

    // 4. Queue confirmation summary
    case SCREENS.QUEUE_CONFIRM:
      ScreenComponent = (
        <QueueConfirmScreen
          guestName={guestName}
          partySize={partySize}
          carInfo={carInfo}
          onConfirm={() => goTo(SCREENS.LIVE_QUEUE)}
        />
      );
      break;

    // 5. Live queue
    case SCREENS.LIVE_QUEUE:
      ScreenComponent = (
        <LiveQueueScreen
          onEnableNotifications={() => goTo(SCREENS.NOTIFY)}
        />
      );
      break;

    // 6. Notification prompt
    case SCREENS.NOTIFY:
      ScreenComponent = (
        <NotifyScreen
          onAllow={() => goTo(SCREENS.TABLE_READY)}
          onSkip={() => goTo(SCREENS.LIVE_QUEUE)}
        />
      );
      break;

    // 7. Table ready
    case SCREENS.TABLE_READY:
      ScreenComponent = (
        <TableReadyScreen
          onOnMyWay={() => goTo(SCREENS.HOST_NOTIFIED)}
          onDoneWaiting={() => goTo(SCREENS.LIVE_QUEUE)}
        />
      );
      break;

    // 8. Notification sent / host notified → Show details
    case SCREENS.HOST_NOTIFIED:
      ScreenComponent = (
        <HostNotifiedScreen
          guestName={guestName}
          partySize={partySize}
          onShowDetails={() => goTo(SCREENS.PROOF_FOR_HOST)}
        />
      );
      break;

    // 9. Proof for host
    case SCREENS.PROOF_FOR_HOST:
      ScreenComponent = (
        <ProofForHostScreen
          guestName={guestName}
          partySize={partySize}
          onDone={() => goTo(SCREENS.DONE)}
        />
      );
      break;

    // 10. Final “Enjoy your meal”
    case SCREENS.DONE:
      ScreenComponent = (
        <DoneScreen
          onRestart={() => goTo(SCREENS.WELCOME)}
        />
      );
      break;

    default:
      ScreenComponent = null;
  }

  return (
    <Layout
      toastMessage={toastMessage}
      showBack={showBack}
      onBack={handleBack}
    >
      {ScreenComponent}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={goTo}
        SCREENS={SCREENS}
      />
    </Layout>
  );
}
