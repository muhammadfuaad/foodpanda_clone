import Faq from "../Faq"


function FaqSection() {

  return (
    <div className="flex flex-col gap-4 px-12">
      <p className="text-[1.5rem] font-bold text-gray">Frequently Asked Questions</p>

      <Faq 
        question="How can I get foodpanda delivery?"  
        answer="To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, 
        browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add 
        them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will 
        arrive at your doorstep!"
      />
      <Faq 
        question="Which takeout restaurants open now near me?"
        answer="You can check which takeout restaurants are open now near you by simply typing your address in the
         location bar on foodpanda and pressing search. You will see all the available restaurants and shops that 
         deliver to your area."
      />
      <Faq 
        question="Does foodpanda deliver 24 hours?"
        answer="Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a 
        late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. 
        You can also order groceries 24 hours a day via pandamart."
      />
      <Faq 
        question="Can you pay cash for foodpanda?"
        answer="Yes, you can pay cash on delivery for foodpanda in Pakistan."
      />
      <Faq 
        question="How can I pay foodpanda online?"
        answer="You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal."
      />
      <Faq 
        question="Can I order foodpanda for someone else?"
        answer="Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update 
        the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery 
        details are not correct and the order cannot be delivered, we won't be able to process a refund."
      />
      <Faq 
        question="How much does foodpanda charge for delivery?"
        answer="Delivery fee charged by foodpanda in Pakistan depends on many operational factors, 
        most of all - location and the restaurant you are ordering from. You can always check the delivery fee while 
        forming your order. Besides, you can filter the restaurants by clicking on the 'Free Delivery' icon at the 
        top of your restaurant listing."
      />
      <Faq 
        question="What restaurants let you order online?"
        answer="There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, 
        McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the 
        restaurants near you that deliver, just type in your address and discover all the available places."
      />
      <Faq 
        question="Does foodpanda have minimum order?"
        answer="Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you 
        order from and is indicated during your ordering process."
      />
      <Faq 
        question="What is the difference between delivery and Pick-Up?"
        answer="If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to 
        your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant 
        for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only."
      />
      <p className="text-[1rem] font-bold text-gray">
        Order food and groceries online with foodpanda now and enjoy a great dining experience!
      </p>
    </div>

  )
}

export default FaqSection
