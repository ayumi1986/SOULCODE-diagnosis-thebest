// App.jsx
import React, { useState } from "react";
import SoulDiagnosisIntro from "./components/SoulDiagnosisIntro";
import SoulcodeQuestionPage from "./components/SoulQuestionPage";
import SoulResultCard from "./components/SoulResultCard";
import questions from "./data/soulcode_questions";
import evaluateSoulType from "./logic/soulcode_diagnosis_logic";
import typeOutputs from "./data/soulcode_type_outputs";

export default function App() {
  const [step, setStep] = useState("intro");
  const [answers, setAnswers] = useState([]);
  const [resultType, setResultType] = useState(null);

  const handleStart = () => {
    setStep("questions");
  };

  const handleFinish = (finalAnswers) => {
    const type = evaluateSoulType(finalAnswers);
    setAnswers(finalAnswers);
    setResultType(type);
    setStep("result");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {step === "intro" && <SoulDiagnosisIntro onStart={handleStart} />}
      {step === "questions" && (
        <SoulcodeQuestionPage questions={questions} onFinish={handleFinish} />
      )}
      {step === "result" && (
        <SoulResultCard type={resultType} answers={answers} data={typeOutputs} />
      )}
    </div>
  );
}
