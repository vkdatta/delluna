export const name="dog-duotone";
export const id="dl_f5f4fb11dd1f418e87fe";
export const url=new URL("../icons/dog-duotone.svg?v=37ea6ac802386381b27cb94b37a7f1128d03029ab9052b769a8736d4034e3548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
