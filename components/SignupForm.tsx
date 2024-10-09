"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import Link from 'next/link'

export default function SignupForm() {
  const [isSignedUp, setIsSignedUp] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSignedUp(true)
  }

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
    setIsSignedUp(true)
  }

  if (isSignedUp) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up Successful</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <Icons.checkCircle className="w-16 h-16 text-green-500" />
          </div>
          <p className="text-center mt-4">Your account has been created successfully!</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" passHref>
            <Button variant="link">Go to Login</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
        <CardDescription>Sign up for a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
            </div>
          </div>
          <Button className="w-full mt-6" type="submit">Sign Up</Button>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={handleGoogleSignup}>
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}