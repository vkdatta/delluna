export const name="cell-signal-none-light";
export const id="dl_c4431cc0eb7c418a9813";
export const url=new URL("../icons/cell-signal-none-light.svg?v=6cb55619e29005b4b7cacb3bd25fcbe2f201f263e329f872c591029536e4c0f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
