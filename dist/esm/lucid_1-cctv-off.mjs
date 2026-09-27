export const name="lucid_1-cctv-off";
export const id="dl_e0168aeb0b9a446fbf85";
export const url=new URL("../icons/lucid_1-cctv-off.svg?v=9efffb4e02eb196d0144365a55201bf29f224d5d33cab98011ff6fc5de7bfa6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
