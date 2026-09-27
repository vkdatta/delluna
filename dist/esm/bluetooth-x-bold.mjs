export const name="bluetooth-x-bold";
export const id="dl_5ea61418795f4ef5b643";
export const url=new URL("../icons/bluetooth-x-bold.svg?v=4cf653c9e3fa2c1761b2a158d71bf25c12423150231f3666cf75595b416a3cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
