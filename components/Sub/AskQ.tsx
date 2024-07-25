import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { useState } from "react"

type props = {
    children: React.ReactNode
}

export const AskQuestion = ({children} : props) => {

  // const [isOpen, setOpen] = useState(null)
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Ask a question</DialogTitle>
          <DialogDescription>
            We will answer any question you have for us.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Full Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="username" placeholder="Email Address" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="question" className="text-right  pt-2">
              Question
            </Label>
            <Textarea id="question" placeholder="Type Question Here" className="col-span-3 " />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send Question</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
