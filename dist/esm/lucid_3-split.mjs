export const name="lucid_3-split";
export const id="dl_9ea6e36645f741d3a79e";
export const url=new URL("../icons/lucid_3-split.svg?v=ebd92563e17333bb6d3b07f6af02d6fbe8ce86ade0fe91f9912598871f84caec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
