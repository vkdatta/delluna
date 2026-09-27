export const name="home_max";
export const id="dl_fee07012efc3edd3f92b";
export const url=new URL("../icons/home_max.svg?v=74d98e718ffefa4e3bf7a7f4b19e81c237f1cc355c73dc18078f0d10de5125d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
