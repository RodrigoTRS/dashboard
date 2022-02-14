import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form' 
import Head from 'next/head'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";
import { Input } from '../../components/Form/Input'
import { Header } from "../../components/Header/index";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
name: string;
email: string;
password: string;
password_confirmation: string;
}
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido."),
    password: yup.string().required("Senha obrigatória").min(6, "A senha deve conter no mínimo 6 caracteres."),
    password_confirmation: yup.string().required("Confirmação obrigatória").oneOf([null, yup.ref('password')], "As senhas precisam ser iguais."),
});

export default function CreateUser() {

    const { register, handleSubmit, formState, formState: { errors } } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    return (

        <Box>
            
            <Head>
                <title>Dashgo. | Create user</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth="1400"
                mx="auto"
                px="6"
                >
                    
                <Sidebar />

                <Box as="form"

                  flex="1"
                  borderRadius="8"
                  bg="gray.800"
                  p="8"
                  boxShadow="0 4px 6px 2px #13131b2d"
                  border="1px solid"
                  borderColor="gray.700"
                  onSubmit={handleSubmit(handleCreateUser)}>

                    <Heading size="md" fontWeight="normal"> Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <Stack spacing={["4", "4", "8"]} direction={{base: "column", md: "row"}}>

                        <SimpleGrid minChildWidth="248" spacing={["4", "4", "8"]} width="100%">

                            <Input
                              name="name"
                              label="Nome"
                              error={errors.name}
                              {...register('name')}
                            />

                            <Input
                              name="email"
                              type="email"
                              label="E-mail"
                              error={errors.email}
                              {...register('email')}
                            />

                        </SimpleGrid>
                        

                        <SimpleGrid minChildWidth="248" spacing={["4", "4", "8"]} width="100%">

                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              error={errors.password}
                              {...register('password')}
                            />

                            <Input
                              name="password-confirmation"
                              type="password"
                              label="Confirmar senha"
                              error={errors.password_confirmation}
                              {...register('password_confirmation')}
                            />

                        </SimpleGrid>

                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <Stack spacing="2" direction="row">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha" size="sm">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" size="sm" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>

            </Flex>

        </Box>

    )

}