export const name="move_location-fill";
export const id="dl_18f530e8ed1a45eaa42f";
export const url=new URL("../icons/move_location-fill.svg?v=690427c5c3e8c9f1bbfaf5a7303a199522482c59de9f110e87ac197fa54c9186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
