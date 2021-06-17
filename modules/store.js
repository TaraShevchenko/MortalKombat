const store = {
    logs: {
        start: `Часы показывали [time], когда <p class="nameColor">[playerKick]</p> и <p class="nameColor">[playerDefence]</p> бросили вызов друг другу.`,
        end: [
            `Результат удара <p class="nameColor">[playerKick]</p>: <p class="nameColor">[playerDefence]</p> - труп`,
            `<p class="nameColor">[playerDefence]</p> погиб от удара бойца <p class="nameColor">[playerKick]</p>`,
            `Результат боя: <p class="nameColor">[playerDefence]</p> - жертва, <p class="nameColor">[playerKick]</p> - убийца`,
        ],
        hit: [
            `<p class="nameColor">[playerDefence]</p> пытался сконцентрироваться, но <p class="nameColor">[playerKick]</p> разбежавшись раздробил копчиком левое ухо врага.`,
            `<p class="nameColor">[playerDefence]</p> расстроился, как вдруг, неожиданно <p class="nameColor">[playerKick]</p> случайно раздробил грудью грудину противника.`,
            `<p class="nameColor">[playerDefence]</p> зажмурился, а в это время <p class="nameColor">[playerKick]</p>, прослезившись, раздробил кулаком пах оппонента.`,
            `<p class="nameColor">[playerDefence]</p> чесал <вырезано цензурой>, и внезапно неустрашимый <p class="nameColor">[playerKick]</p> отчаянно размозжил грудью левый бицепс оппонента.`,
            `<p class="nameColor">[playerDefence]</p> задумался, но внезапно <p class="nameColor">[playerKick]</p> случайно влепил грубый удар копчиком в пояс оппонента.`,
            `<p class="nameColor">[playerDefence]</p> ковырялся в зубах, но <p class="nameColor">[playerKick]</p> проснувшись влепил тяжелый удар пальцем в кадык врага.`,
            `<p class="nameColor">[playerDefence]</p> вспомнил что-то важное, но внезапно <p class="nameColor">[playerKick]</p> зевнув, размозжил открытой ладонью челюсть противника.`,
            `<p class="nameColor">[playerDefence]</p> осмотрелся, и в это время <p class="nameColor">[playerKick]</p> мимоходом раздробил стопой аппендикс соперника.`,
            `<p class="nameColor">[playerDefence]</p> кашлянул, но внезапно <p class="nameColor">[playerKick]</p> показав палец, размозжил пальцем грудь соперника.`,
            `<p class="nameColor">[playerDefence]</p> пытался что-то сказать, а жестокий <p class="nameColor">[playerKick]</p> проснувшись размозжил копчиком левую ногу противника.`,
            `<p class="nameColor">[playerDefence]</p> забылся, как внезапно безумный <p class="nameColor">[playerKick]</p> со скуки, влепил удар коленом в левый бок соперника.`,
            `<p class="nameColor">[playerDefence]</p> поперхнулся, а за это <p class="nameColor">[playerKick]</p> мимоходом раздробил коленом висок врага.`,
            `<p class="nameColor">[playerDefence]</p> расстроился, а в это время наглый <p class="nameColor">[playerKick]</p> пошатнувшись размозжил копчиком губы оппонента.`,
            `<p class="nameColor">[playerDefence]</p> осмотрелся, но внезапно <p class="nameColor">[playerKick]</p> робко размозжил коленом левый глаз противника.`,
            `<p class="nameColor">[playerDefence]</p> осмотрелся, а <p class="nameColor">[playerKick]</p> вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.`,
            `<p class="nameColor">[playerDefence]</p> ковырялся в зубах, как вдруг, неожиданно <p class="nameColor">[playerKick]</p> отчаянно размозжил плечом мышцы пресса оппонента.`,
            `<p class="nameColor">[playerDefence]</p> пришел в себя, и в это время <p class="nameColor">[playerKick]</p> провел разбивающий удар кистью руки, пробив блок, в голень противника.`,
            `<p class="nameColor">[playerDefence]</p> пошатнулся, а в это время <p class="nameColor">[playerKick]</p> хихикая влепил грубый удар открытой ладонью по бедрам врага.`,
        ],
        defence: [
            `<p class="nameColor">[playerKick]</p> потерял момент и храбрый <p class="nameColor">[playerDefence]</p> отпрыгнул от удара открытой ладонью в ключицу.`,
            `<p class="nameColor">[playerKick]</p> не контролировал ситуацию, и потому <p class="nameColor">[playerDefence]</p> поставил блок на удар пяткой в правую грудь.`,
            `<p class="nameColor">[playerKick]</p> потерял момент и <p class="nameColor">[playerDefence]</p> поставил блок на удар коленом по селезенке.`,
            `<p class="nameColor">[playerKick]</p> поскользнулся и задумчивый <p class="nameColor">[playerDefence]</p> поставил блок на тычок головой в бровь.`,
            `<p class="nameColor">[playerKick]</p> старался провести удар, но непобедимый <p class="nameColor">[playerDefence]</p> ушел в сторону от удара копчиком прямо в пятку.`,
            `<p class="nameColor">[playerKick]</p> обманулся и жестокий <p class="nameColor">[playerDefence]</p> блокировал удар стопой в солнечное сплетение.`,
            `<p class="nameColor">[playerKick]</p> не думал о бое, потому расстроенный <p class="nameColor">[playerDefence]</p> отпрыгнул от удара кулаком куда обычно не бьют.`,
            `<p class="nameColor">[playerKick]</p> обманулся и жестокий <p class="nameColor">[playerDefence]</p> блокировал удар стопой в солнечное сплетение.`
        ],
        draw: 'Ничья - это тоже победа!'
    },
}

export default store;