export const name="medication";
export const id="dl_11954a2a44464cdc8470";
export const url=new URL("../icons/medication.svg?v=833d2d746a6a156f436cf6492c1a7ed4fe87ed62b8c46e2e9c7d7965605fd4d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
