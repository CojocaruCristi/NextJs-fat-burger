import Head from "next/head"

const Reviews = ({ reviews }) => {
   

    return (
        <>
            <Head>
                <title>Fat burger | Reviews</title>
            </Head>
            <div>
                <h1>Client Reviews</h1>
                <div className="reviews">
                    {!!reviews && reviews.slice(0, 20).map((review) => {
                        return(
                            <div key={review.id}>
                                {review.id}{' '}
                                {`${review.body.slice(0, 90)}...`}

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await result.json();

    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}

export default Reviews;