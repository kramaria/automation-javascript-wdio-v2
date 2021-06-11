import VoucherPageUkol from '../pageobjects/voucher.homework.page.js'

describe('Voucher Registration Page - excercise 5', () => {

    const formData = {
        firstName: 'Anička',
        lastName: 'Testerka',
        subscriptionLength: 3,
        birthDate: '04/26/1990',
        email: 'anicka.test@czechitas.cz'
    }

    beforeEach(() => {
        browser.url('/voucher');
    });

    describe('Form validation', () => {

        it('should validate default form state', () => {
            expect(VoucherPageUkol.firstNameField).toBeDisplayed();
            expect(VoucherPageUkol.firstNameField).toBeEnabled();
            expect(VoucherPageUkol.firstNameField).toHaveText('');
            expect(VoucherPageUkol.lastNameField).toBeDisplayed();
            expect(VoucherPageUkol.lastNameField).toBeEnabled();
            expect(VoucherPageUkol.firstNameField).toHaveText('');
            expect(VoucherPageUkol.subscriptionLengthField).toHaveAttribute('value', 3);
            expect(VoucherPageUkol.birthDateField).toHaveAttribute('required');
            expect(VoucherPageUkol.emailField).toHaveAttribute('type', 'email');
            expect(VoucherPageUkol.emailField).toHaveText('');
            expect(VoucherPageUkol.submitButton).toHaveText('Vygenerovat kód');
        });

    });

    describe('Price by subscription length', () => {

        const testCases = [
            { ...formData, subscriptionLength: 3, price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2F0Y3' },
            { ...formData, subscriptionLength: 7, price: '950 Kč', code: 'QWFUYTE5OTAwNDI2N2F0Y3' },
            { ...formData, subscriptionLength: 14, price: '850 Kč', code: 'QWFUYTE5OTAwNDI2MTRhdG' },
            { ...formData, subscriptionLength: 21, price: '650 Kč', code: 'QWFUYTE5OTAwNDI2MjFhdG' },
            { ...formData, subscriptionLength: 120, price: '650 Kč', code: 'QWFUYTE5OTAwNDI2MTIwYXRjeg' },
            // { ...formData, subscriptionLength: 0, price: '', code: '' },
            // { ...formData, subscriptionLength: -1, price: '', code: '' },
            // { ...formData, subscriptionLength: 5.5, price: '', code: '' },
            // { ...formData, subscriptionLength: null, price: '', code: '' },
            // { ...formData, subscriptionLength: květen, price: '', code: '' },
        ]

        testCases.forEach( testCase => {

            it('should generate correct price and code for ' + testCase.subscriptionLength + ' month sbscription', () => {
              VoucherPageUkol.submitForm(testCase);
                VoucherPageUkol.takeScreenshot(testCase.subscriptionLength);
                expect(VoucherPageUkol.voucherPrice).toEqual(testCase.price);
                expect(VoucherPageUkol.voucherCode).toEqual(testCase.code);
            });

        });

    });

    describe('Price by age and ', () => {

        const testCases = [
            
            { ...formData, birthDate: '06/06/2021', price: '850 Kč', code: 'QWFUYTIwMjEwNjA2M2F0Y3' },
            { ...formData, birthDate: '04/26/2000', price: '850 Kč', code: 'QWFUYTIwMDAwNjI2M2F0Y3' },
            { ...formData, birthDate: '04/26/1990', price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2F0Y3' },
            { ...formData, birthDate: '05/07/1966', price: '1000 Kč', code: 'QWFUYTE5NjYwNTA3M2F0Y3' },
            { ...formData, birthDate: '04/26/1960', price: '750 Kč', code: 'QWFUYTE5NjAwNDI2M2F0Y3' },
            { ...formData, birthDate: '06/06/1921', price: '750 Kč', code: 'QWFUYTE5MjEwNjA2M2F0Y3' },
            { ...formData, birthDate: '06/06/1997', price: '850 Kč', code: 'QWFUYTE5OTcwNjA2M2F0Y3' },
            { ...formData, birthDate: '06/08/1996', price: '850 Kč', code: 'QWFUYTE5OTYwNjA4M2F0Y3' },
            { ...formData, birthDate: '06/07/1996', price: '1000 Kč', code: 'QWFUYTE5OTYwNjA3M2F0Y3' },
            { ...formData, birthDate: '06/07/1966', price: '1000 Kč', code: 'QWFUYTE5NjYwNjA3M2F0Y3' },
            { ...formData, birthDate: '06/08/1965', price: '1000 Kč', code: 'QWFUYTE5NjUwNjA4M2F0Y3' },
            { ...formData, birthDate: '06/07/1966', price: '850 Kč', code: 'QWFUYTE5NjYwNjA3M2F0Y3' },
        ]

        testCases.forEach( testCase => {

            it('should generate correct price for birth date ' + testCases.birthDate, () => {
                VoucherPageUkol.submitForm(testCase);
                VoucherPageUkol.takeScreenshot(testCase.birthDate);
                expect(VoucherPageUkol.voucherPrice).toEqual(testCase.price);
                expect(VoucherPageUkol.voucherCode).toEqual(testCase.code);
            });
        });

    });
    
});
