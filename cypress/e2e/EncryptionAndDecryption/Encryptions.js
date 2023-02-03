//const Excel = require('exceljs');
import CryptoJS from 'crypto-js';

class Encryptions{
decrip(value) {
        const key = 'mykey';
        const encryptedPassword = value;
        const bytes = CryptoJS.AES.decrypt(encryptedPassword.toString(), key);
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        cy.log(decryptedPassword);
        let pass;
        return pass = decryptedPassword;
      }
      
        encrypt(value){
            const password = value;
            const key = 'mykey';
            const encryptedPassword = CryptoJS.AES.encrypt(password, key);
            return ('password', encryptedPassword.toString());
        }
   }

export default Encryptions