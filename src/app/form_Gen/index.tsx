"use client";

import React, {useState}from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
type Props={}

const FormGenerator = (props: Props) => {
    const [open, setOpen] = useState(false);
    const onFormCreate = () => {
        setOpen(true);
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <Button onClick={onFormCreate}>Create Form</Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new Form</DialogTitle>
        </DialogHeader>
        <form>
            <div className="grip gap-4 py-4">
                <Textarea id="description" name="description" required placeholder="Share what your form is about who is it for
                and what information it has and what do you want to collect with it"></Textarea>
            </div>
        </form>
        <DialogFooter>
            <Button variant='link'>Create Manully</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormGenerator;
