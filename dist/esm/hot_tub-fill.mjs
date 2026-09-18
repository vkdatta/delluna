export const name="hot_tub-fill";
export const id="dl_34362da1172d4f09aa7e";
export const url=new URL("../icons/H/hot_tub-fill.svg?v=8962851f03c120e0011361e8013f357dd86a38b11b14fddbdc690e178fc117f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
