const currentAccountService = require('../services/currentAccountService');
// const currentAccountRoutes = require('../routes/currentAccountRoutes');


exports.createCurrentAccount = async (req, res) => {

    try {
        const { cifId, BVN, firstName, middleName, lastName, DOB, email, phoneNumber, gender } = req.body;

        //CIF validation
        const customer = await currentAccountService.getCustomerById(cifId);
        if (!customer) {
            return res.status(400).json({
                message: 'Could not create current account'
            });
        }
        // Create account
        const currentAccount = await currentAccountService.createCurrentAccount({ cifId, BVN, schemeType });
        // res.body(currentAccount);
        res.status(201).json(currentAccount);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: (error.message || 'Something went wrong. Try again')
        });
    }

}