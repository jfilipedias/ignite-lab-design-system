import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Sign in and start to use!
        </Text>
      </header>

      <form className="flex flex-col items-stretch gap-4 w-full max-w-md mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              placeholder="Type your email"
              type="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Password</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              placeholder="********"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />

          <Text size="sm" className="text-gray-400">
            Remember me
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Sign in
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline transition-colors hover:text-gray-200"
          >
            Forgot yor password?
          </a>
        </Text>

        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline transition-colors hover:text-gray-200"
          >
            Don't have an account? Create one now!
          </a>
        </Text>
      </footer>
    </div>
  );
}
