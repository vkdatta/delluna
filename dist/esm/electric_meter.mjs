export const name="electric_meter";
export const id="dl_f1805ed8e04a438ea973";
export const url=new URL("../icons/electric_meter.svg?v=867ae7fa0cdf5c736fbd26903794c573a668f647f80abbcd9712c3b0b893c567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
