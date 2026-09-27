export const name="lucid_2-fire-extinguisher";
export const id="dl_c95e9a284731469a8870";
export const url=new URL("../icons/lucid_2-fire-extinguisher.svg?v=828a7aac873c91f54b88b93763b2f80c53a957586bfbb46562f0cf958d42faaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
