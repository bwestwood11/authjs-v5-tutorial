'use client';

import { googleAuthenticate } from '@/actions/google-login';
import React from 'react'
import { useActionState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Button } from '../ui/button';

const GoogleLogin = () => {
    const [errorMsgGoogle, dispatchGoogle] = useActionState(googleAuthenticate, undefined) //googleAuthenticate hook
  return (
    <form className="flex mt-4" action={dispatchGoogle}>
    <Button variant={"outline"} className='flex flex-row items-center gap-3 w-full'>
        <BsGoogle />Google Sign In
    </Button>
    <p>{errorMsgGoogle}</p>
</form>
  )
}

export default GoogleLogin;
