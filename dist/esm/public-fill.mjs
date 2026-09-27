export const name="public-fill";
export const id="dl_d6bc05461dc9733303f3";
export const url=new URL("../icons/public-fill.svg?v=eeb9357e78250e06488f7f0dbaa78809411082138dbf3d42ba2e508f992c5b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
