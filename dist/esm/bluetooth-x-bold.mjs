export const name="bluetooth-x-bold";
export const id="dl_5ea61418795f4ef5b643";
export const url=new URL("../icons/bluetooth-x-bold.svg?v=4910df245df822327af0b9e24e594e018852fee75286c3fc624593ad47fb1892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
