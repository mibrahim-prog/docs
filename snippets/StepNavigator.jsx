export const StepNavigator = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goPrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">

        <div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Step {currentStep + 1} of {steps.length}
          </div>

          <div className="mt-1 text-lg font-semibold">
            {step.title}
          </div>
        </div>

       <div className="flex items-center gap-2">

  {!isFirstStep && (
    <button
      type="button"
      onClick={goPrevious}
      className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      aria-label="Previous step"
    >
      ← Previous
    </button>
  )}

  {!isLastStep && (
    <button
      type="button"
      onClick={goNext}
      className="rounded-lg bg-[#0ec154] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      aria-label="Next step"
    >
      Next Step →
    </button>
  )}

</div>
      </div>

      {/* Content */}
      <div className="p-5">

        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {step.description}
        </p>

        <img
          src={step.image}
          alt={step.alt}
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
        />

      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">

        {steps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentStep(index)}
            aria-label={`Go to step ${index + 1}`}
            className={
              index === currentStep
                ? "h-2 w-8 rounded-full bg-[#0ec154] transition-all"
                : "h-2 w-2 rounded-full bg-zinc-300 transition-all dark:bg-zinc-700"
            }
          />
        ))}

      </div>

    </div>
  );
};