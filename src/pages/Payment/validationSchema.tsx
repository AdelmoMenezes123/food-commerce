import {
  isValidCNPJ,
  isValidCPF,
  isValidEmail,
  isValidPhone,
} from '@brazilian-utils/brazilian-utils'
import { number } from 'card-validator'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('O nome é obrigatorio.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    mobile: yup
      .string()
      .required('O celular é obrigatorio')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validatePhone', 'O número de celular deve ser valido', (val) => {
        return isValidPhone(val)
      }),
    email: yup
      .string()
      .required('O email é obrigatorio')
      .email('O email deve ser válido')
      .test('validateEmail', 'O email deve ser valido', (val) => isValidEmail(val)),
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatorio')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .test(
        'validateDocument',
        'O CPF/CNPJ deve ser valido',
        (val) => isValidCPF(val) || isValidCNPJ(val),
      ),
    zipCode: yup
      .string()
      .required('O CEP é obrigatorio')
      .transform((value) => value.replace(/[^\d]+/g, '')),
    street: yup.string().required('Oendereço é obrigatorio'),
    complement: yup.string(),
    number: yup.string().required('O numero é obrigatorio'),
    neighborhood: yup.string().required('O bairro é obrigatorio'),
    city: yup.string().required('A cidade é obrigatorio'),
    state: yup.string().required('O estado é obrigatorio'),

    creditCardNumber: yup
      .string()
      .required('O numero do cartão é obrigatorio')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .test(
        'validateCreditCardNumber',
        'O numero do cartão é invalido',
        (val) => number(val).isValid,
      ),

    creditCardHolder: yup
      .string()
      .required('O nome é obrigatorio.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),

    creditCardExpiration: yup
      .string()
      .required('A data de validade é obrigatorio.')
      .transform((value) => {
        const [month, year] = value.split('/')

        if (month && year && month.length === 2 && year.length === 2)
          return new Date(+`20${year}`, +month - 1, 1).toISOString()

        return value
      })
      .test(
        'validateCreditCardExpiration',
        'A data de validade é invalida',
        (val) => new Date(val) >= new Date(),
      ),
    creditCardSecurityCode: yup
      .string()
      .required('O CVV é obrigatorio')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .min(3, 'O CVV deve possuir 3 e 4 digitos.')
      .max(4, 'O CVV deve possuir 3 e 4 digitos.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
