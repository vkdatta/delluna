export const name="path-fill";
export const id="dl_f008d5d7bf104027bec9";
export const url=new URL("../icons/path-fill.svg?v=8ccbb0e074b985a32116128199ac8cccab787c24614445008061f0cd6f015240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
