import Container from "./Container";

const FooterTop = () => {
    const incentives=
    [
        {
            name: "Free shipping",
            imageSrc:
              "data:image/png;base64,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",
            description:
              "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
          },
          {
            name: "10-year warranty",
            imageSrc:
              "",
            description:
              "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
          },
          {
            name: "Exchanges",
            imageSrc:
              "",
            description:
              "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
          },
        ];
  return (
    <Container className="py-0">
      <div className=" rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className=" sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default FooterTop