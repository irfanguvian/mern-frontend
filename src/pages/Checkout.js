import React, { Component } from 'react'
import Header from 'parts/Header'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from 'elements/Stepper'

import BookingInformation from 'parts/Checkout/BookingInformation'
import Payment from 'parts/Checkout/Payment'
import Completed from 'parts/Checkout/Completed'
import ItemDetails from 'json/itemDetails.json'

export default class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    const { data } = this.state

    const checkout = {
      duration: 3,
    }

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instructions below',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: 'Yay! Completed',
        description: 'Your Made it',
        content: <Completed />,
      },
    }

    return (
      <div>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50, marginTop: 30 }}
              />
              <Meta data={steps} current={currentStep} />
              <MainContent data={steps} current={currentStep} />
              {currentStep === 'bookingInformation' && (
                <Controller>
                  {data.firstName !== '' &&
                    data.lastName !== '' &&
                    data.email !== '' &&
                    data.phone !== '' && (
                      <Fade>
                        <Button
                          className='btn mb-3'
                          type='button'
                          isBlock
                          isPrimary
                          hasShadow
                          style={{ marginLeft: 75 }}
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className='btn'
                    style={{ marginLeft: 110 }}
                    type='link'
                    isBlock
                    isLight
                    onClick={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' &&
                    data.bankName !== '' &&
                    data.bankHolder !== '' && (
                      <Fade>
                        <Button
                          className='btn mb-3'
                          type='button'
                          style={{ marginLeft: 75 }}
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className='btn'
                    type='button'
                    isBlock
                    isLight
                    style={{ marginLeft: 110 }}
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === 'completed' && (
                <Controller>
                  <Button
                    className='btn'
                    type='link'
                    style={{ marginLeft: 75 }}
                    isBlock
                    isPrimary
                    hasShadow
                    href=''
                  >
                    Back To Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </div>
    )
  }
}
