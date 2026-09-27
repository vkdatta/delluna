export const name="mobile_layout";
export const id="dl_dc41143961569ae60cc9";
export const url=new URL("../icons/mobile_layout.svg?v=30f8491b7fe58104334b754079920c3848e8b2a969ca90f49b500e3b9d96f801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
