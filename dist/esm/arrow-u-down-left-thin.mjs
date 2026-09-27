export const name="arrow-u-down-left-thin";
export const id="dl_aba4214d431147c8977f";
export const url=new URL("../icons/arrow-u-down-left-thin.svg?v=f1422804af663284de8de693ca43b5c03faa4df036e08148674bffa88e4c9330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
