import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: 'span' | 'shadow';
}

/**
 * Reusable button with offset shadow effect.
 * Example: <Button>VIEW SERVICES</Button>
 */
const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = 'span',
	...props
}) => {
	if (variant === 'span') {
		return (
			<div className="relative inline-block group">
				<button
					className={twMerge(
						clsx(
							`font-space-grotesk relative bg-white border-1 border-black px-8 py-2.5 rounded-md z-10 
               transition-all duration-200 ease-in-out 
               hover:-translate-x-[2px] hover:-translate-y-[2px] 
               active:translate-x-[1px] active:translate-y-[1px]`,
							className
						)
					)}
					{...props}
				>
					{children}
				</button>

				{/* Shadow layer */}
				<span
					className="absolute left-[6px] top-[6px] w-full h-full bg-zinc-300 border border-black rounded-md 
           transition-all duration-200 ease-in-out 
           group-hover:left-[2px] group-hover:top-[2px]"
				></span>
			</div>
		);
	}

	return (
		<button
			className={twMerge(
				clsx(
					'font-space-grotesk relative bg-white border-2 border-black px-8 py-2.5 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ease-in-out',
					className
				)
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
