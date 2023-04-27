export default function calcPrice(type, hiring_days, hiring_start_day) {

    var basePrice = parseInt(hiring_start_day.split('-')[2]) < 15 ? 10 : 12;
    var hiring_days = parseInt(hiring_days);

    switch (type) {
        case 'e':
            return basePrice * hiring_days;
            break;

        case 'o':
            return hiring_days >= 5 ? ((basePrice * 5) + ((hiring_days - 5) * basePrice)) : [5, 'o', 'Antique bicycles need to be hired for 5 days or more']; 
            break;

        case 'r':
            return hiring_days >= 3 ? ((basePrice * 3) + ((hiring_days - 3) * basePrice)) : [3, 'r', 'Regular bicycles need to be hired for 3 days or more'];
            break;
    }
}