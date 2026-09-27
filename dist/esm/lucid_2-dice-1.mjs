export const name="lucid_2-dice-1";
export const id="dl_85aabfbcdf284c1a944e";
export const url=new URL("../icons/lucid_2-dice-1.svg?v=04b35b59f3be1b1b453540467a5cd1c0825314bdaa826d396216217a0a2a581f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
