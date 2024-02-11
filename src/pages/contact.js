import React from 'react';
import {Seo} from '../components/seo'
import PageContent from '../components/pageContent'
import styled from 'styled-components';
import { colors, breakPoints } from '../theme/variables.js';
import Button from '../components/button'
import PageHeader from '../components/pageHeader'

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`

const Input = styled.input`
    width: 100%;
    border: 2px solid ${colors.black};
    padding: 0.5rem;
    &:focus {
        outline: 3px solid black;
    }
    margin-bottom: 1rem;
`

const SmallInput = styled(Input)`
    margin-bottom: 1rem;
    @media (${breakPoints.mobile}) {
      width: 250px;
    }
`

const HiddenInput = styled.p`
    display: none;
`

const TextInput = styled(Input)`
    resize: vertical;
    min-height: 30px;
`

const ContactPage = () => {
    return (
        <>
            <Seo title='Contact' />
            <PageContent>
                <PageHeader>Contact</PageHeader>
                <p>Please get in touch using the form below. I look forward to hearing from you!</p>
                <form
                    name='Contact'
                    method='POST'
                    data-netlify={true}
                    netlify-honeypot='bot-field'
                    action='/thanks'
                >
                    <Input type='hidden' name='form-name' value='Contact' />
                    <HiddenInput>
                        <Label htmlFor='bot-field'>Don't fill this in if you're a human</Label>
                        <Input name='bot-field' id='bot-field'/> 
                    </HiddenInput>
                    <div>
                        <Label htmlFor='name'>Full Name</Label>
                        <SmallInput type='text' name='name' id='name' required />
                    </div>
                    <div>
                        <Label htmlFor='email'>Email</Label>
                        <SmallInput type='email' name='email' id='email' required />
                    </div>
                    <div>
                        <Label htmlFor='message'>Message</Label>
                        <TextInput as='textarea' name='message' type='text' id='message' required />
                    </div>
                    <Button as='button' type='submit'>Send</Button>
                </form>
            </PageContent>
        </>
      );
}
 
export default ContactPage;