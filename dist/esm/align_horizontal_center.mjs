export const name="align_horizontal_center";
export const id="dl_9b21623b08cb401da1ff";
export const url=new URL("../icons/align_horizontal_center.svg?v=2a6be502957399c5bfc6e558319d9bf7ada41c48dd76f6e9b0f50cfed5130dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
