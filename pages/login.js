import React from 'react';
import Router from 'next/router';

import { FormLogin } from '@/containers/index';
import { AuthLayout } from '@/layouts/index';

export default function Login() {
  return (
    <AuthLayout>
      <FormLogin />
    </AuthLayout>
  )
}