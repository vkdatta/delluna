export const name="crown-cross-duotone";
export const id="dl_192a7f80a2f649e8a32f";
export const url=new URL("../icons/crown-cross-duotone.svg?v=73db05d2568f5310ec87dff427bd88896fe8171b9ab315532d5d46805411c232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
