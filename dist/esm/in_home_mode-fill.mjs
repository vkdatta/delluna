export const name="in_home_mode-fill";
export const id="dl_557c55d812e25c88a807";
export const url=new URL("../icons/in_home_mode-fill.svg?v=b42aa4eee0b1337d2184851446da914917e3e7040a813a26f504d1615855c708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
