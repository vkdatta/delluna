export const name="lucid_2-luggage";
export const id="dl_f507c993da7d4c6381a1";
export const url=new URL("../icons/lucid_2-luggage.svg?v=8811a8be1e7658ebaec1c43f576d3bb162f4b781f1a4c414aa8f75a0042ca8d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
