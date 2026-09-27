export const name="10k-fill";
export const id="dl_8e96fd2119b4d12c58c2";
export const url=new URL("../icons/10k-fill.svg?v=66381ce65088e363c2168ffe88e5241ed43e1d531d8ccec3a7734315e02fe070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
