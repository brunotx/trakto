import { FormControl, Validators } from '@angular/forms';
import { Customer } from '../../store/customer.model';

export class PaymentForm {

    id = new FormControl();
    paymentChoice = new FormControl();
    name = new FormControl();
    cardNumber = new FormControl();
    validity = new FormControl();
    cardCode = new FormControl();

    phone = new FormControl();
    cep = new FormControl();
    address = new FormControl();
    addressNumber = new FormControl();
    neighborhood = new FormControl();
    city = new FormControl();
    state = new FormControl();
    complement = new FormControl();
    cpfOrCnpj = new FormControl();

    constructor(startupValues: Customer, paymentChoice: string) {
        let mandatoryCardFields = [
            'name',
            'cardNumber',
            'cardCode',
            'validity',
        ];

        let mandatoryBoletoFields = [
            'name',
            'cpfOrCnpj',
            'phone',
            'cep',
            'address',
            'addressNumber',
            'neighborhood',
            'city',
            'state',
            'complement',
        ];

        if (paymentChoice === 'card') {
            mandatoryCardFields.forEach(
                field => {
                    (this[field] as FormControl).setValidators(Validators.required);
                }
            )
        } else {
            mandatoryBoletoFields.forEach(
                field => {
                    (this[field] as FormControl).setValidators(Validators.required);
                }
            )
        }

        if (startupValues === undefined) {
            return;
        }
        for (const prop in startupValues) {
            if (this[prop.toString()] === undefined) { continue; }
            (this[prop.toString()] as unknown as FormControl).setValue(startupValues[prop.toString()]);
        }
    }
}