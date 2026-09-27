export const name="lucid_1-cctv";
export const id="dl_f9c03ed5ae5141989a33";
export const url=new URL("../icons/lucid_1-cctv.svg?v=5d6f1a6d9646ce4b40e961492c724c60e7690f32aa76605127777ae0b9842550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
