export const name="passport-fill";
export const id="dl_baee538cc43fc8213e41";
export const url=new URL("../icons/passport-fill.svg?v=54cc67101dd816221887c7339cbb5f4fbbeafc67defd174c0f5196364e572df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
