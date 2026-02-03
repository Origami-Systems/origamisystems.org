export const SubmitContact = async (name: string, email: string, organization: string, hear: string, question?: string) => {
    try {
        await fetch("https://n8n.origamiking3612.com/webhook/the-house-app/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                organization: organization,
                hear: hear,
                question: question,
                site: "origamisystems.org",
            })
        })

        return true;
    } catch (error: any) {
        console.error("API error:", error.message)
        return false;
    }
}

