import { styled } from "@mui/material"
import { Grid } from "@mui/material"
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
            <StyledHero>
                <Grid container spacing={2}>
                    <Grid size={4}>

                        <StyledImage src={Avatar} />
                    </Grid>
                    <Grid size={8}>
                        size=4
                    </Grid>
                </Grid>



            </StyledHero>
        </>
    )
}

export default Hero
