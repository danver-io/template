import React from 'react'

const HomePage: React.FC = () => {
    return <div>homepage</div>
}

export const getStaticProps = async ({locale}) => ({
    props: {
    },
})

export default HomePage
