export const name="lucid_2-folder-output";
export const id="dl_d3ed441724204107b422";
export const url=new URL("../icons/lucid_2-folder-output.svg?v=c86fc8293ae4933f6e1e279e7505dc29749f5d4e27b25d7597ceda2b19ae3ad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
