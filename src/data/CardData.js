import earnings from  '../assets/earnings.svg';
import wallet from  '../assets/wallet.svg';
import notes from '../assets/notes.svg'
import bag from '../assets/bag.svg'

export const CardData = [
    {
        name: 'Earnings',
        amount: '$198K',
        icon: earnings,
        profit: '34.7',
        loss: false,
        color: '#DFFFF0'
    },
    {
        name: 'Orders',
        amount: '$2.4K',
        icon: notes,
        profit: '2',
        loss: true,
        color: '#EEDFFF'

    },
    {
        name: 'Balance',
        amount: '$2.4K',
        icon: wallet,
        profit: '2',
        loss: true,
        color: '#AAEAFF'

    },
    {
        name: 'Total Sales',
        amount: '$8.8K',
        icon: bag,
        profit: '11',
        loss: false,
        color: '#FFDFE8'

    },
]