export const name="save_as";
export const id="dl_fb32ee3f48e1ef5fafcf";
export const url=new URL("../icons/save_as.svg?v=f4a84705145665817309b2b9611daaac5846a85566e4323876307e374c2abd02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
