'use client';

import { useState } from 'react';

export default function StepCarousel() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Open the Parameter page",
      content: "When you log in to the Xperia Dashboard, click on Parameter. The Parameter page opens with the Categories Weightage tab selected by default.",
      image: "/Images/CustomParameters/CP-ClickParameter.png",
      alt: "Selecting Parameter from the dashboard navigation menu"
    },
    {
      title: "Select the Custom Parameter tab",
      content: "The Parameter page contains three tabs: Categories Weightage, Custom Parameter, and Specialized Parameter. Select Custom Parameter.",
      image: "/Images/CustomParameters/CP-CustomParameterTab.png",
      alt: "The Custom Parameter tab on the Parameter page"
    },
    {
      title: "Add a new parameter",
      content: "Select Add Parameter to open the parameter creation dialog.",
      image: "/Images/CustomParameters/CP-AddParameterBtn.png",
      alt: "The Add Parameter button"
    },
    {
      title: "Select department(s) (optional)",
      content: "In the Select Department(s) section, choose the department the parameter should apply to. Department assignment is optional. If the parameter should not be tied to a department, skip this step.",
      image: "/Images/CustomParameters/CP-SelectDepartment.png",
      alt: "Selecting departments for the custom parameter"
    },
    {
      title: "Enter the parameter name",
      content: "In the Parameter Name field, enter a clear, descriptive name for the behavior to be evaluated, such as Greeting, Politeness, or Issue Resolution.",
      image: "/Images/CustomParameters/CP-Enterparametername.png",
      alt: "Entering the custom parameter name"
    },
    {
      title: "Define the false condition",
      content: "In the Mark this as False if... field, describe the situation in which the behavior should be considered negative. State the condition precisely, as Xperia uses this description to identify the behavior during evaluation.",
      image: "/Images/CustomParameters/CP-EnterFalseCondition.png",
      alt: "Defining the false condition for the custom parameter"
    },
    {
      title: "Configure call tracking (optional)",
      content: "If the Track every call radio button is displayed, select or clear it according to your evaluation requirements.",
      image: "/Images/CustomParameters/CP-TrackCall.png",
      alt: "The Track every call radio button setting"
    },
    {
      title: "Generate the prompt",
      content: "Select Generate Prompt. Xperia generates an evaluation prompt from the details you entered. Review the generated prompt and confirm that it accurately describes the expected behavior.",
      image: "/Images/CustomParameters/CP-ClickNext.png",
      alt: "The Generate Prompt button"
    },
    {
      title: "Create the parameter",
      content: "When the generated prompt is correct, select Create Parameter.",
      image: "/Images/CustomParameters/CP-ClickCreateParameter.png",
      alt: "The Create Parameter button"
    },
    {
      title: "Assign Categories Weightage",
      content: "If you selected departments earlier, the Categories Weightage modal opens. Assign a score to your new parameter. Warning: The total weightage must equal 100/100.",
      image: "/Images/CustomParameters/CP-ClickSaveNext.png",
      alt: "Assigning Categories Weightage to the new custom parameter"
    },
    {
      title: "Confirm the parameter was created",
      content: "Xperia displays Parameter Created Successfully! Choose to Upload a Call to proceed, or Cancel to upload calls later.",
      image: "/Images/CustomParameters/CP-ClickUploadCall.png",
      alt: "Confirmation that the custom parameter was created"
    }
  ];

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 my-8 bg-white dark:bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 m-0">
          Step {currentStep + 1}: {steps[currentStep].title}
        </h3>
        <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      <div className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed h-[80px] flex items-center">
        <p className="m-0">{steps[currentStep].content}</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setCurrentStep(Math.max(currentStep - 1, 0))}
          disabled={currentStep === 0}
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
          aria-label="Previous Step"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex-grow h-[400px] rounded-lg overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex justify-center items-center p-2">
          <img
            src={steps[currentStep].image}
            alt={steps[currentStep].alt}
            className="w-full h-full object-contain"
          />
        </div>

        <button
          type="button"
          onClick={() => setCurrentStep(Math.min(currentStep + 1, steps.length - 1))}
          disabled={currentStep === steps.length - 1}
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
          aria-label="Next Step"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}