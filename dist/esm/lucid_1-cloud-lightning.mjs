export const name="lucid_1-cloud-lightning";
export const id="dl_084350543f2d4048b549";
export const url=new URL("../icons/lucid_1-cloud-lightning.svg?v=616d5876ba9bdd53d0b2141da0e1b73a6cd0952496cc4b1171d1e0ba6321da44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
