export const name="money_range";
export const id="dl_607f6af30bdea8a98214";
export const url=new URL("../icons/money_range.svg?v=7d13b30daf9402c8503b7a72a227959bba2c1020cb48b43fe551c2a9c5677cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
