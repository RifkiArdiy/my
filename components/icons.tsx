import React from "react";
import { Github, Linkedin, X, Youtube, Mail, Globe } from "lucide-react";

export const Icons = {
    github: (props: React.ComponentProps<typeof Github>) => <Github {...props} />,
    linkedin: (props: React.ComponentProps<typeof Linkedin>) => <Linkedin {...props} />,
    x: (props: React.ComponentProps<typeof X>) => <X {...props} />,
    youtube: (props: React.ComponentProps<typeof Youtube>) => <Youtube {...props} />,
    email: (props: React.ComponentProps<typeof Mail>) => <Mail {...props} />,
    globe: (props: React.ComponentProps<typeof Globe>) => <Globe {...props} />,
} as const;

export default Icons;