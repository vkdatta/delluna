export const name="lucid_3-popsicle";
export const id="dl_9c29209e891a45c5a2f4";
export const url=new URL("../icons/lucid_3-popsicle.svg?v=100b86fbf02310515b27bc9a82f15664ce2301c639d77bc1df43dedfd02d8a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
