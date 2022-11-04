import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

export const items = [
    {
        label: "Home",
        key: "home",
        icon: <PieChartOutlined />,
        children: "",
    },
    {
        label: "Users",
        key: "users",
        icon: <UserOutlined />,
        children: [
            {
                label: "Menu Users 1",
                key: "users_menu_1",
            },
            {
                label: "Menu Users 2",
                key: "users_menu_2",
            },
        ],
    },
    {
        label: "Team",
        key: "team",
        icon: <PieChartOutlined />,
        children: "",
    },
];