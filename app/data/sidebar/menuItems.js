import {
    Monitor
  } from "feather-icons-react"
  
  const menuItems = [
      {
        header: "Main",
        list: [
          {
            title: "Dashboard",
            path: "/dashboard",
            icon: <Monitor />,
          },
          {
            title: "Users",
            path: "/dashboard/users",
            icon: <Monitor />,
          },
          {
            title: "Products",
            path: "/dashboard/products",
            icon: <Monitor />,
            sub: [
              {
                title: "Dashboard",
                path: "/dashboard",
                icon: <Monitor />,
              }
            ]
          },
          {
            title: "Transactions",
            path: "/dashboard/transactions",
            icon: <Monitor />,
          },
        ],
      },
      {
        header: "Analytics",
        list: [
          {
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <Monitor />,
          },
          {
            title: "Reports",
            path: "/dashboard/reports",
            icon: <Monitor />,
          },
          {
            title: "Teams",
            path: "/dashboard/teams",
            icon: <Monitor />,
          },
        ],
      },
      {
        header: "User",
        list: [
          {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <Monitor />,
          },
          {
            title: "Help",
            path: "/dashboard/help",
            icon: <Monitor />,
          },
        ],
      },
    ];
    export default menuItems;