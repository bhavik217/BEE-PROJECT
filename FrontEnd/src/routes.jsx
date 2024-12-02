import Layout from "./layout"
import SignUp from "./pages/Signup.jsx";
import SignIn from "./pages/SignIn.jsx";
import JoinTeam from "./pages/JoinTeam";
import MainPage from "./pages/MainPage";
import MeetTeam from "./pages/MeetTeam";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import MeetTeamLayout from "./pages/MeetTeamLayout";
import PersonDetail from "./components/PersonDetails";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/meet-team",
                element: <MeetTeamLayout />,
                children: [
                    {
                        index: true,
                        element: <MeetTeam />
                    },
                    {
                        path: ":personId",
                        element: <PersonDetail />
                    }
                ]
            },
            {
                path: "/join-team",
                element: <JoinTeam/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
        ]
    }
];