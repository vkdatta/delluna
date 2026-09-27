export const name="quick_phrases-fill";
export const id="dl_aafe9fa419d276e06f50";
export const url=new URL("../icons/quick_phrases-fill.svg?v=8547915cd8cef0f4bc7b8a3339030b8f4b609d4efed8a1dc6ba5e620d2db0bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
