import axios from 'axios';

const {
  NODE_ENV,
  BILLPLZ_API_SECRET_KEY,
} = process.env;

let API_ENDPOINT;

if (NODE_ENV === 'staging') {
  API_ENDPOINT = 'https://billplz-staging.herokuapp.com/api/v3';
}
if (NODE_ENV === 'production') {
  API_ENDPOINT = 'https://www.billplz.com/api/v3';
}

/*
* getBill() return a bill
* based on BILL_ID
*
*  @param {String} BILL_ID
*/
const getBill = function (BILL_ID) {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/bills/${BILL_ID}`,
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  })
  .then(function (res) {
    /*
    * for debugging
    * console.log(res);
    */
    return res.data;
  })
  .catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* createOpenCollection() create a new billplz open collection (payment form)
*
*  @param {String} title
*/
const createOpenCollection = function (args) {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/open_collections`,
    data: {
      title: args.title,
      description: args.description,
      amount: args.amount,
      fixed_amount: args.fixed_amount,
      fixed_quantity: args.fixed_quantity,
      payment_button: args.payment_button,
      reference_1_label: args.reference_1_label,
      reference_2_label: args.reference_2_label,
      email_link: args.email_link,
      tax: args.tax,
    },
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  })
  .then(function (res) {
    /*
    * for debugging
    * console.log(res);
    */
    return res.data;
  })
  .catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* createCollection() create a new billplz collection
*
*  @param {String} title
*/
const createCollection = function (title) {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/collections`,
    data: {
      title,
    },
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  })
  .then(function (res) {
    /*
    * for debugging
    * console.log(res);
    */
    return res.data;
  })
  .catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* createBill() create a new billplz bill
* based on collection_id
*
*  @param {Object} args
*/
const createBill = function (args) {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/bills`,
    data: {
      collection_id: args.collection_id,
      email: args.email,
      mobile: args.mobile,
      name: `${args.firstName} ${args.lastName}`,
      amount: args.amount,
      callback_url: args.callback_url,
      description: args.description,
      due_at: args.due_at,
      redirect_url: args.redirect_url,
      deliver: args.deliver,
      reference_1_label: args.reference_1_label,
      reference_1: args.reference_1,
      reference_2_label: args.reference_2_label,
      reference_2: args.reference_2,
    },
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  })
  .then(function (res) {
    /*
    * for debugging
    * console.log(res);
    */
    return res.data;
  })
  .catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* deleteBill() delete a billplz bill
* based on BILL_ID
*
*  @param {String} BILL_ID
*/
const deleteBill = function (BILL_ID) {
  return axios({
    method: 'delete',
    url: `${API_ENDPOINT}/bills/${BILL_ID}`,
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  })
  .then(function (res) {
    /*
    * for debugging
    * console.log(res);
    */
    return res.statusText;
  })
  .catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* checkAccountVerification() get an account verification status
* based on BANK_ACCOUNT_NUMBER
*
*  @param {String} BANK_ACCOUNT_NUMBER
*/
const checkAccountVerification = function (BANK_ACCOUNT_NUMBER) {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/check/bank_account_number/${BANK_ACCOUNT_NUMBER}`,
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  }).then(function (res) {
    return res.data;
  }).catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

/*
* collectionStatus() for change a collection status to active or inactive
* based on COLLECTION_ID and status
*
*  @param {Object} args
*/
const collectionStatus = function (args) {
  return axios({
    method: 'post',
    url: `${API_ENDPOINT}/collections/${args.COLLECTION_ID}/${args.status}`,
    auth: {
      username: BILLPLZ_API_SECRET_KEY,
      password: '',
    },
  }).then(function (res) {
    return res.data;
  }).catch(function (err) {
    /*
    * for debugging
    * console.log(JSON.stringify(err.response.data.error));
    */
    throw new Error(err);
  });
};

// eslint-disable-next-line
export { getBill, createCollection, createOpenCollection, createBill, deleteBill, checkAccountVerification, collectionStatus };
