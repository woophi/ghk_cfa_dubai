import calendar from './assets/calendar.png';
import check from './assets/check.png';
import sun from './assets/sun.png';
import suns from './assets/suns.png';

export const data = {
  minRequest: 1_556,
  maxRequest: 20_000,
  titleName: 'Дубай',
  titleType: 'Зарубежная жилая недвижимость.',
  titlePeriod: '3 года',
  p1: 'Цифровые квадратные метры зарубежной жилой недвижимости — это инвестиции в индексное значение стоимости первичной недвижимости соответствующего региона.',
  p2: 'Покупая Цифровые квадратные метры жилой недвижимости, вы получаете участие в динамике стоимости жилой недвижимости, рассчитываемой на основании цен по заключенным и зарегистрированным договорам долевого участия (ДДУ).',
  p3: 'Цифровые квадратные метры жилой недвижимости – это инновационный продукт, выпускаемый в формате ЦФА.',
  cfaNumber: 'EMAR-1-DTD-092024-00073',
  cfaPrice: '350 $',
  cfaPriceNumber: 350,
  cfaVolume: 'от 175 000 $ до 7 000 000 $',
  cfaVolumeM2: 'от 50 м2 до 2 000 м2',
  cfaPeriodPayment: 'В конце срока',
  cfaDuration: '3 года',
  hideSellDate: false,

  imgRows: [
    {
      title: 'Комплексная диверсификация',
      subtitle: 'По застройщикам и ЖК региона',
      img: sun,
    },
    {
      title: 'Расчётный базовый актив',
      subtitle: 'Residential Sales Price Index',
      img: check,
    },
    {
      title: 'Ожидаемая доходность',
      subtitle: '7% — 9% годовых',
      img: suns,
    },
    {
      title: 'Комфортный срок',
      subtitle: 'Срок инвестиций — 3 года',
      img: calendar,
    },
  ],
  emitment: 'Emaar Properties',
  address: 'Emaar Business Park 1 Sheikh Zayed Road, Dubai',
  site: 'https://www.emaar.com/',
};
