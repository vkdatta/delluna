export const name="stamp-fill";
export const id="dl_463f070a580ace2eec98";
export const url=new URL("../icons/stamp-fill.svg?v=039b621c307c963437ba30029fec5c9c95bbe7f7e507a42231e753008cbcb343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
