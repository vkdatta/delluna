export const name="potted-plant-fill";
export const id="dl_fd110c4dbf6640fbbb34";
export const url=new URL("../icons/potted-plant-fill.svg?v=a482d844f7b8375fdcfb839e561dab7f9c82977b13060b3998e474f8e29dfac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
