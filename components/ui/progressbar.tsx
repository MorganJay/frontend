import { cn } from "@/lib";

interface ProgressBarProps {
	value: number;
	className?: string;
}

const ProgressBar = ({ value, className, ...props }: ProgressBarProps) => {
	return (
		<progress
			className={cn(
				"progress-filled:bg-abeg-green w-full appearance-none border-none progress-unfilled:h-2 progress-unfilled:rounded-[4px] progress-unfilled:bg-abeg-neutral-80 progress-filled:rounded-[4px]",
				className
			)}
			id="target"
			value={`${value}`}
			max="100"
			{...props}
		>
			{`${value}%`}
		</progress>
	);
};

export default ProgressBar;
