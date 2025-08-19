import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 md:p-6">
            <Link href="/" className="font-bold text-xl">
                P VINOD KUMAR
            </Link>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/#projects" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/#experience" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                Experience
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/#contact" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:flex items-center gap-4">
                <Link href="https://github.com/vinodvk00" target="_blank">
                    <Github className="h-6 w-6 hover:opacity-75" />
                </Link>
                <Link
                    href="https://linkedin.com/in/iamvinod00/"
                    target="_blank">
                    <Linkedin className="h-6 w-6 hover:opacity-75" />
                </Link>
            </div>
        </header>
    );
};
