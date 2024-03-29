'use server';
import LoginForm from '@/components/forms/login';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

const Login = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <LoginForm />
    </div>
  );
};

export default Login;
