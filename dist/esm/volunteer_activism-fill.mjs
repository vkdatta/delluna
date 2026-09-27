export const name="volunteer_activism-fill";
export const id="dl_572e0099963846639db3";
export const url=new URL("../icons/volunteer_activism-fill.svg?v=4b7700fc7f6402f222ba26fe92878ce59381bbbd18926b380a7c9012d6fad0a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
