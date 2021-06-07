// import VoucherPageUkol from '../../pageobjects/voucher.page.js'

// describe('Voucher Registration Page - excercise 5', () => {

//     const formData = {
//         firstName: 'Anička',
//         lastName: 'Testerka',
//         subscriptionLength: 3,
//         birthDate: '26.4.1990',
//         email: 'anicka.testerka@czechitas.cz'
//     }

//     beforeEach(() => {
//         browser.url('/voucher');
//     });

//     describe('Form validation', () => {

//         it('should validate default form state', () => {
//             expect(VoucherPageUkol.firstNameField).toBeDisplayed();
//             expect(VoucherPageUkol.firstNameField).toBeEnabled();
//             expect(VoucherPageUkol.firstNameField).toHaveText('');
//             expect(VoucherPageUkol.lastNameField).toBeDisplayed();
//             expect(VoucherPageUkol.lastNameField).toBeEnabled();
//             expect(VoucherPageUkol.firstNameField).toHaveText('');
//             expect(VoucherPageUkol.subscriptionLengthField).toHaveAttribute('value', 3);
//             expect(VoucherPageUkol.birthDateField).toHaveAttribute('required');
//             expect(VoucherPageUkol.emailField).toHaveAttribute('type', 'email');
//             expect(VoucherPageUkol.emailField).toHaveText('');
//             expect(VoucherPageUkol.submitButton).toHaveText('Vygenerovat kód');
//         });

//     });

//     describe('Price by subscription length', () => {

//         const testCases = [
//             { ...formData, subscriptionLength: 3, price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2FhY3' },
//             { ...formData, subscriptionLength: 7, price: '950 Kč', code: 'QWFUYTE5OTAwNDI2N2FhY3' },
//             { ...formData, subscriptionLength: 14, price: '850 Kč', code: 'QWFUYTE5OTAwNDI2MTRhYW' },
//             { ...formData, subscriptionLength: 21, price: '650 Kč', code: 'QWFUYTE5OTAwNDI2MjFhYW' },
//             { ...formData, subscriptionLength: 120, price: '650 Kč', code: 'QWFUYTE5OTAwNDI2MTIwYWFjeg' },
//             // { ...formData, subscriptionLength: 0, price: '', code: '' },
//             // { ...formData, subscriptionLength: -1, price: '', code: '' },
//             // { ...formData, subscriptionLength: 5.5, price: '', code: '' },
//             // { ...formData, subscriptionLength: null, price: '', code: '' },
//             // { ...formData, subscriptionLength: květen, price: '', code: '' },
//         ]

//         testCases.forEach( testCase => {

//             it('should generate correct price and code for ' + testCase.subscriptionLength + ' month sbscription', () => {
//               VoucherPageUkol.submitForm(testCase);
//                 VoucherPageUkol.takeScreenshot(testCase.subscriptionLength);
//                 expect(VoucherPageUkol.voucherPrice).toEqual(testCase.price);
//                 expect(VoucherPageUkol.voucherCode).toEqual(testCase.code);
//             });

//         });

//     });

//     describe('Price by age and ', () => {

//         const testCases = [
            
//             { ...formData, birthDate: '6.6.2021', price: '850 Kč', code: 'QWFUYTIwMjEwNjA2M2FhY3' },
//             { ...formData, birthDate: '26.4.2000', price: '850 Kč', code: 'QWFUYTIwMDAwNDI2M2FhY3' },
//             { ...formData, birthDate: '26.4.1990', price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2FhY3' },
//             { ...formData, birthDate: '7.5.1966', price: '1000 Kč', code: 'QWFUYTE5NjYwNzA2M2FhY3' },
//             { ...formData, birthDate: '26.4.1960', price: '750 Kč', code: 'QWFUYTE5NjAwNDI2M2FhY3' },
//             { ...formData, birthDate: '6.6.1921', price: '750 Kč', code: 'QWFUYTE5MjEwNjA2M2FhY3' },
//             { ...formData, birthDate: '6.6.1997', price: '850 Kč', code: 'QWFUYTE5OTcwNjA2M2FhY3' },
//             { ...formData, birthDate: '8.6.1996', price: '850 Kč', code: 'QWFUYTE5OTYwNjA4M2FhY3' },
//             { ...formData, birthDate: '7.6.1996', price: '1000 Kč', code: 'QWFUYTE5OTYwNjA3M2FhY3' },
//             { ...formData, birthDate: '7.6.1966', price: '1000 Kč', code: 'QWFUYTE5OTYwNjA3M2FhY3' },
//             { ...formData, birthDate: '8.6.1965', price: '1000 Kč', code: 'QWFUYTE5NjYwNzA2M2FhY3' },
//             { ...formData, birthDate: '7.6.1966', price: '850 Kč', code: 'QWFUYTE5NjYwNjA3M2FhY3' },
//         ]

//         testCases.forEach( testCase => {

//             it('should generate correct price for birth date ' + testCases.birthDate, () => {
//                 VoucherPageUkol.submitForm(testCase);
//                 VoucherPageUkol.takeScreenshot(testCase.birthDate);
//                 expect(VoucherPageUkol.voucherPrice).toEqual(testCase.price);
//                 expect(VoucherPageUkol.voucherCode).toEqual(testCase.code);
//             });
//         });

//     });
    
// });


describe('Voucher Registration Page', () => {

  it('should open voucher page - excercise 1', () => {
      
      browser.url('/voucher');
      
      const windowSize = browser.getWindowSize();
      console.log(windowSize);

      const allCookies = browser.getCookies();
      console.log(allCookies);

      browser.saveScreenshot('voucher_page_' + browser.capabilities.browserName + '.png');

      browser.pause(5000);
  });
  
});