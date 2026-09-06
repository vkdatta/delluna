export const name="cloud-lightning";
export const id="dl_26558f792a70485f8c4d";
export const url=new URL("../icons/cloud-lightning.svg?v=f6d079024531d0ae614d5ee481345554bc9f186714be161041b6c04e158ff996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
