export const name="vertical_align_top-fill";
export const id="dl_38f51257887f9a55440a";
export const url=new URL("../icons/vertical_align_top-fill.svg?v=1ff3483d84184d49f37d139dd752e2aa4e00fada604cbe399d371c9473b94e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
