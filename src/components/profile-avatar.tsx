"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Zap } from "lucide-react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProfileAvatarProps {
  className?: string;
  sizeClassName?: string;
}

export function ProfileAvatar({
  className = "",
  sizeClassName = "size-24 md:size-32",
}: ProfileAvatarProps) {
  const upworkUrl =
    DATA.contact.social.Upwork?.url || "https://www.upwork.com";

  return (
    <div className={`flex flex-col items-center gap-2.5 ${className}`}>
      {/* Profile Photo Avatar */}
      <Avatar
        className={`${sizeClassName} border rounded-full shadow-lg ring-4 ring-muted dark:ring-muted/80 transition-transform duration-300`}
      >
        <AvatarImage
          alt={DATA.name}
          src={DATA.avatarUrl}
          className="object-cover object-center"
        />
        <AvatarFallback>{DATA.initials}</AvatarFallback>
      </Avatar>

      {/* Upwork Availability Badge ("Available now") positioned away from the photo */}
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork Availability: Available now"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f3eeff] dark:bg-[#251244] text-[#6501d4] dark:text-[#c084fc] border border-[#e5d6fe] dark:border-[#582099]/60 px-3 py-1 text-xs sm:text-[13px] font-semibold shadow-xs transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(101,1,212,0.25)] active:scale-95 select-none"
            >
              <Zap className="size-3.5 fill-current shrink-0" />
              <span>Available now</span>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-3.5 py-1.5 text-xs shadow-lg"
          >
            <p>Available on Upwork • Open for projects</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
