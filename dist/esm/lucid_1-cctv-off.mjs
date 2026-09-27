export const name="lucid_1-cctv-off";
export const id="dl_e0168aeb0b9a446fbf85";
export const url=new URL("../icons/lucid_1-cctv-off.svg?v=ec3a56c30e1bdeca57d8dc675acf50d25ca9c023b9251da8d1e3b71adb6c80ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
