import { INavBarData } from './helper'

export const navbarData: INavBarData[] = [
    {
        routeLink: 'registration',
        icon: 'fal fa-home',
        label: 'Registration',
    },
    {
        routeLink: 'work-basket',
        icon: 'fal fa-home',
        label: 'Work basket',
        items: [
            {
                routeLink: 'transaction-basket',
                label: 'Transaction basket',
            },
            {
                routeLink: 'maintenance-basket',
                label: 'Maintenance basket',
            },
            {
                routeLink: 'registration-basket',
                label: 'Registration basket',
            },
        ],
    },
    {
        routeLink: 'transaction',
        icon: 'fal fa-home',
        label: 'Transaction',
    },
    {
        routeLink: 'maintenance',
        icon: 'fal fa-home',
        label: 'Maintenance',
    },
    {
        routeLink: 'report',
        icon: 'fal fa-home',
        label: 'RISS Report',
        items: [
            {
                routeLink: 'report/buy',
                label: 'BUY / switch in',
            },
            {
                routeLink: 'report/sell',
                label: 'SELL / switch out',
            },
        ],
    },
]
