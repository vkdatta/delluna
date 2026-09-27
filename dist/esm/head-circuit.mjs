export const name="head-circuit";
export const id="dl_5f14269529c543289e79";
export const url=new URL("../icons/head-circuit.svg?v=dda4ece84c7006ec8388a4c229b61f78a8e1f7d5e5f7cacb292572c81b556464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
