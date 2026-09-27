export const name="arrows_outward";
export const id="dl_5d4d67f0dfede227b6e6";
export const url=new URL("../icons/arrows_outward.svg?v=76da2a10aaba4060312cf9022c1d44393240a9d78221d88274de0d7c459515f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
