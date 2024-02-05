

function Faq({question, answer}) {

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[1.15rem] font-bold text-gray">{question}</p>
      <p className="text-[1rem] font-[300] text-gray">{answer}</p>
    </div>

  )
}

export default Faq
