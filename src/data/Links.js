export const Links = {
    logged: [
        {
            to: '/dashboard',
            text: 'Dashboard',
            svg: (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        d="M0 11.1111H8.88889V0H0V11.1111ZM0 20H8.88889V13.3333H0V20ZM11.1111 20H20V8.88889H11.1111V20ZM11.1111 0V6.66667H20V0H11.1111Z"
                    />
                </svg>
            ),
        },
        {
            to: '/list',
            text: 'Task List',
            svg: (
                <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="white"
                >
                    <path
                        d="M17 4H0V6H17V4ZM17 0H0V2H17V0ZM0 10H13V8H0V10ZM15 8V14L20 11L15 8Z"
                    />
                </svg>
            ),
        },
        {
            to: '/statistics',
            text: 'Statistics',
            svg: (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        d="M17.7778 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19 1 20 2.22222 20H17.7778C19 20 20 19 20 17.7778V2.22222C20 1 19 0 17.7778 0ZM6.66667 15.5556H4.44444V7.77778H6.66667V15.5556ZM11.1111 15.5556H8.88889V4.44444H11.1111V15.5556ZM15.5556 15.5556H13.3333V11.1111H15.5556V15.5556Z"
                    />
                </svg>
            ),
        },
        {
            to: '/profile',
            text: 'Profile',
            svg: (
                <svg width="32" height="32" fill="white" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
            ),
        },
    ],
    notLogged: [
        {
            to: '/home',
            text: 'Home',
            svg: (
                <svg width="25" height="25" fill="white" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
            ),
        },
        {
            to: '/signin',
            text: 'Sign In',
            svg: (
                <svg width="25" height="25" fill="white" viewBox="0 0 16 16">
                    <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                    <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                </svg>
            ),
        },
        {
            to: '/signup',
            text: 'Sign Up',
            svg: (
                <svg width="25" height="25" fill="white" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                </svg>
            ),
        },
    ]
}