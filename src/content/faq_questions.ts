export type FAQAnswers = {
    name: string;
    questions: { q: string; a: string }[];
};

// TODO: Add more and uncomment as these things are built
export const allQuestions: FAQAnswers[] = [
    {
        name: "General",
        questions: [
            {
                q: "What is Origami Systems?",
                a: "Origami Systems is a software company building modern tools for organizations. We create applications that help communities manage members, events, communication, and everyday operations.",
            },
            {
                q: "What products does Origami Systems offer?",
                a: "Origami Systems develops multiple applications designed to solve different organizational needs. Our first product is The House App, a platform for managing house systems, competitions, and member engagement.",
            },
            {
                q: "What is The House App?",
                a: "The House App is a platform by Origami Systems that helps schools, churches, youth groups, and organizations manage house systems, track points, run competitions, share announcements, and engage their members.",
            },
            {
                q: "Who is Origami Systems for?",
                a: "Origami Systems builds software for organizations of all sizes, including schools, churches, youth groups, businesses, clubs, and communities.",
            },
        ],
    },
    {
        name: "The House App",
        questions: [
            {
                q: "What can I do with The House App?",
                a: "The House App allows organizations to create houses, manage members, award points, run competitions, share announcements, manage events, and display live standings.",
            },
            {
                q: "Can I customize my houses?",
                a: "Yes. Administrators can customize houses with their own names, colors, and settings to match their organization's needs.",
            },
            {
                q: "Can I use The House App for competitions?",
                a: "Yes. The House App includes tools for tracking points, managing competitions, and displaying live standings for members.",
            },
            {
                q: "Where can I learn more about The House App?",
                a: "You can visit https://the-house-app.com to learn more about The House App, its features, and how it can benefit your organization.",
            },
        ],
    },
    {
        name: "Accounts & Security",
        questions: [
            // soon
            // {
            //     q: "Can an organization have multiple administrators?",
            //     a: "Yes. Organizations can have multiple administrators with permissions based on their responsibilities.",
            // },
            {
                q: "Does Origami Systems support two-factor authentication?",
                a: "Yes. Supported applications include security features such as two-factor authentication to help protect accounts.",
            },
            {
                q: "Is our organization's data secure?",
                a: "Security is a priority at Origami Systems. We use modern security practices to help protect customer accounts and data.",
            },
        ],
    },
    // Soon
    // {
    //     name: "Billing",
    //     questions: [
    //         {
    //             q: "How does pricing work?",
    //             a: "Origami Systems offers subscription-based pricing for organizations using our applications. Pricing depends on the product and plan selected.",
    //         },
    //         {
    //             q: "Can I cancel my subscription?",
    //             a: "Yes. Subscriptions can be canceled at any time.",
    //         },
    //     ],
    // },
    {
        name: "Support",
        questions: [
            {
                q: "How can I contact support?",
                a: "Email support@origamisystems.org",
            },
            {
                q: "How long does support typically take to respond?",
                a: "Support typically responds within 24-48 hours on business days.",
            },

            // {
            //     q: "Do you provide documentation?",
            //     a: "Yes. We provide documentation and resources to help organizations get started and use our applications effectively.",
            // },
        ],
    },
];
