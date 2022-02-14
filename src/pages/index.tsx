import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form' 
import Head from 'next/head'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Home() {
  

  const { register, handleSubmit, formState, formState: { errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (

    <>
      <Head>
        <title>Dashgo. | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >

        <Flex as="form"

          w="110%"
          maxW="400"
          bg="gray.800"
          p="8"
          borderRadius="8"
          flexDir="column"
          border="1px solid"
          borderColor="gray.700"
          onSubmit={handleSubmit(handleSignIn)}
        >

          <Stack spacing="4">

            <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />

            <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />

            <Button
              type="submit"
              mt="6"
              colorScheme="pink"
              isLoading={formState.isSubmitting}
              >
                Entrar
              </Button>

          </Stack>

        </Flex>

      </Flex>
    </>
  )
}
