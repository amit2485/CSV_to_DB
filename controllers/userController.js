

const User = require("../model/User")
const csvParser = require("csvtojson")
const Agent = require("../model/Agent")
const PolicyCarrier = require("../model/policyCarrier")
const PolicyCategory = require("../model/policyCategory")
const UserAccount = require("../model/userAccount")
const PolicyInfo = require("../model/policyInfo")

const addUserData = async (req, res) => {
    try {
        const userData = []
        const agentName = []
        const accountName = []
        const companyName = []
        const categoryName = []
        const policyInfo = []

        const response = await csvParser().fromFile(req.file.path);

        for (const row of response) {
            userData.push({
                firstName: row.fname,
                dob: row.dob,
                address: row.address,
                phoneNumber: row.phone,
                state: row.state,
                zipcode: row.zip,
                email: row.email,
                gender: row.gender,
                userType: row.type
            });

            agentName.push({
                agentName: row.agent_name
            });

            accountName.push({
                accountName: row.account_name
            });

            categoryName.push({
                category_name: row.category_name
            });

            companyName.push({
                company_name: row.company_name
            });
        }

        const users = await User.insertMany(userData);
        const agents = await Agent.insertMany(agentName);
        const userAccounts = await UserAccount.insertMany(accountName);
        const policyCarriers = await PolicyCarrier.insertMany(companyName);
        const policyCategories = await PolicyCategory.insertMany(categoryName);

        for (const row of response) {
            const policyCategory = policyCategories.find(cat => cat.category_name === row.category_name);
            const user = users.find(u => u.firstName === row.fname && u.email === row.email);

            if (!policyCategory || !user) {
                throw new Error('PolicyCategory or User not found');
            }

            policyInfo.push({
                policyNumber: row.policy_number,
                policyStartDate: row.policy_start,
                policyEndDate: row.policy_end,
                policyCategory: policyCategory._id,
                collectionId: row.collection_id,
                companyCollectionId: row.cmpny_collection_id,
                userId: user._id
            });
        }

        await PolicyInfo.insertMany(policyInfo);

        res.send({ msg:"data inserted successfully" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = addUserData;
