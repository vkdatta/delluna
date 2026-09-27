export const name="h_mobiledata_badge";
export const id="dl_6aeddf5e1c727c436a5e";
export const url=new URL("../icons/h_mobiledata_badge.svg?v=5758496a0cfb91a56adde206d3bd447afa58274e288b724ec01687aaaf981312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
