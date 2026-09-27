export const name="notes-fill";
export const id="dl_42c928d81268edf8e04d";
export const url=new URL("../icons/notes-fill.svg?v=50476481a6b65838485380b7b59373be36c0414188dc2eb24f7751482a3a2c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
