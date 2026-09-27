export const name="mobile_hand-fill";
export const id="dl_7e6b8f2dbb656f2ada59";
export const url=new URL("../icons/mobile_hand-fill.svg?v=8fd39f225fc5858b4f7b73de61fbff00a4ea33c03d05ec09de91e997df2f48c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
