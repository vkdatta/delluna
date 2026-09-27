export const name="show_chart";
export const id="dl_c1dbfe7ff45483f4b405";
export const url=new URL("../icons/material_symbols/show_chart.svg?v=ff7b59690c279113e95c6f156b99ba668b9c59fa65ce106c13be1df7d1793a0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
