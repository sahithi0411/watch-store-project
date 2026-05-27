import './index.css'
import Header from '../Header'
import {useState} from 'react'

const BuyNow = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const [bankName, setBankName] =
    useState('')

  const [accountNumber, setAccountNumber] =
    useState('')

  const [ifscCode, setIfscCode] =
    useState('')

  const [upiId, setUpiId] = useState('')

  const [showBankDetails, setShowBankDetails] =
    useState(false)

  const [showSuccess, setShowSuccess] =
    useState(false)

  const [errors, setErrors] = useState({})

  const validateUserDetails = () => {
    const newErrors = {}

    if (name === '') {
      newErrors.name =
        '*Please Enter Your Name'
    }

    if (phone === '') {
      newErrors.phone =
        '*Please Enter Phone Number'
    }

    if (address === '') {
      newErrors.address =
        '*Please Enter Address'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const validateBankDetails = () => {
    const newErrors = {}

    if (bankName === '') {
      newErrors.bankName =
        '*Please Enter Bank Name'
    }

    if (accountNumber === '') {
      newErrors.accountNumber =
        '*Please Enter Account Number'
    }

    if (ifscCode === '') {
      newErrors.ifscCode =
        '*Please Enter IFSC Code'
    }

    if (upiId === '') {
      newErrors.upiId =
        '*Please Enter UPI ID'
    }

    setErrors(prev => ({
      ...prev,
      ...newErrors,
    }))

    return Object.keys(newErrors).length === 0
  }

  const onClickPay = () => {
    if (validateUserDetails()) {
      setShowBankDetails(true)
    }
  }

  const onClickFinalPurchase = () => {
    if (validateBankDetails()) {
      setShowSuccess(true)
    }
  }

  const onClickCashOnDelivery = () => {
    if (validateUserDetails()) {
      setShowSuccess(true)
    }
  }

  return (
    <>
      <Header />

      <div
        className={
          showSuccess
            ? 'success-page'
            : 'buynow-container'
        }
      >
        {showSuccess ? (
          <div className='success-full-card'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/845/845646.png'
              alt='success'
              className='success-image'
            />

            <h1 className='success-title'>
              Order Confirmed
            </h1>

            <p className='success-text'>
              Payment Successfully Completed
            </p>

            <p className='success-text'>
              Thank You For Shopping
            </p>
          </div>
        ) : (
          <form className='buynow-form'>
            <h1 className='buynow-heading'>
              Checkout Details
            </h1>

            <label className='label'>
              User Name
            </label>

            <input
              type='text'
              placeholder='Enter Your Name'
              className='input'
              value={name}
              onChange={e =>
                setName(e.target.value)
              }
            />

            {errors.name && (
              <p className='error-text'>
                {errors.name}
              </p>
            )}

            <label className='label'>
              Phone Number
            </label>

            <input
              type='number'
              placeholder='Enter Phone Number'
              className='input'
              value={phone}
              onChange={e =>
                setPhone(e.target.value)
              }
            />

            {errors.phone && (
              <p className='error-text'>
                {errors.phone}
              </p>
            )}

            <label className='label'>
              Address
            </label>

            <textarea
              placeholder='Enter Address'
              className='textarea'
              value={address}
              onChange={e =>
                setAddress(e.target.value)
              }
            />

            {errors.address && (
              <p className='error-text'>
                {errors.address}
              </p>
            )}

            <h1 className='payment-heading'>
              Payment Method
            </h1>

            <div className='payment-container'>
              <button
                type='button'
                className='payment-btn'
                onClick={onClickPay}
              >
                Click To Pay
              </button>

              <button
                type='button'
                className='payment-btn'
                onClick={
                  onClickCashOnDelivery
                }
              >
                Cash On Delivery
              </button>
            </div>

            {showBankDetails && (
              <div className='bank-card'>
                <h1 className='bank-heading'>
                  Bank Details
                </h1>

                <label className='label'>
                  Bank Name
                </label>

                <input
                  type='text'
                  placeholder='Enter Bank Name'
                  className='input'
                  value={bankName}
                  onChange={e =>
                    setBankName(
                      e.target.value
                    )
                  }
                />

                {errors.bankName && (
                  <p className='error-text'>
                    {errors.bankName}
                  </p>
                )}

                <label className='label'>
                  Account Number
                </label>

                <input
                  type='number'
                  placeholder='Enter Account Number'
                  className='input'
                  value={accountNumber}
                  onChange={e =>
                    setAccountNumber(
                      e.target.value
                    )
                  }
                />

                {errors.accountNumber && (
                  <p className='error-text'>
                    {errors.accountNumber}
                  </p>
                )}

                <label className='label'>
                  IFSC Code
                </label>

                <input
                  type='text'
                  placeholder='Enter IFSC Code'
                  className='input'
                  value={ifscCode}
                  onChange={e =>
                    setIfscCode(
                      e.target.value
                    )
                  }
                />

                {errors.ifscCode && (
                  <p className='error-text'>
                    {errors.ifscCode}
                  </p>
                )}

                <label className='label'>
                  UPI ID
                </label>

                <input
                  type='text'
                  placeholder='Enter UPI ID'
                  className='input'
                  value={upiId}
                  onChange={e =>
                    setUpiId(
                      e.target.value
                    )
                  }
                />

                {errors.upiId && (
                  <p className='error-text'>
                    {errors.upiId}
                  </p>
                )}

                <button
                  type='button'
                  className='purchase-btn'
                  onClick={
                    onClickFinalPurchase
                  }
                >
                  Final Purchase
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </>
  )
}

export default BuyNow