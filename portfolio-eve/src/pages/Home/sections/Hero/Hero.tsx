import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor: "Black"
    }))

    const StyledImage = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>Ola

                <StyledImage src={Avatar} />

            </StyledHero>
        </>
    )
}

export default Hero
