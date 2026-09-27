export const name="tooltip";
export const id="dl_2e0618487aeb3db3d425";
export const url=new URL("../icons/tooltip.svg?v=36cc55d90f458bf730d59b01f8f4153b08c5ac582f8ee68c5c01cacb0f475852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
