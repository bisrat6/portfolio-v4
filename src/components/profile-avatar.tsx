"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Zap } from "lucide-react";

interface ProfileAvatarProps {
  className?: string;
  sizeClassName?: string;
}

export function ProfileAvatar({
  className = "",
  sizeClassName = "size-24 md:size-32",
}: ProfileAvatarProps) {
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
      <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f3eeff] dark:bg-[#251244] text-[#6501d4] dark:text-[#c084fc] border border-[#e5d6fe] dark:border-[#582099]/60 px-3 py-1 text-xs sm:text-[13px] font-semibold select-none cursor-default">
        <Zap className="size-3.5 fill-current shrink-0" />
        <span>Available now</span>
      </div>
    </div>
  );
}
