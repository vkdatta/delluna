export const name="lucid_1-binary";
export const id="dl_e34c7f49593046309c89";
export const url=new URL("../icons/lucid_1-binary.svg?v=e8543badde7fdb3d143fc7fb813cb5982806393644c753f008ee1a8e6cb54d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
