export const name="directions_alt_off";
export const id="dl_6b77103ce1fb52c836a7";
export const url=new URL("../icons/directions_alt_off.svg?v=859bf163f42cb729083879896d91f30845a09883345f53db8ffcb35e9b4cbab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
