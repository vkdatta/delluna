export const name="work-fill";
export const id="dl_4721b46616e1c18a8059";
export const url=new URL("../icons/work-fill.svg?v=0e6b29dc52cde1b2f4aa760625347d425e868c095a2fbf6f0538282ddd07a3e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
