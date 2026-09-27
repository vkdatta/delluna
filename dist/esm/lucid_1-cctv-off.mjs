export const name="lucid_1-cctv-off";
export const id="dl_e0168aeb0b9a446fbf85";
export const url=new URL("../icons/lucid_1-cctv-off.svg?v=a51bad01ca0edf2269f027f2ac2b293d9ed55c23f2b925422f1fcb314edc5bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
