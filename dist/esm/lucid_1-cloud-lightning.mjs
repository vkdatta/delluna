export const name="lucid_1-cloud-lightning";
export const id="dl_084350543f2d4048b549";
export const url=new URL("../icons/lucid_1-cloud-lightning.svg?v=c802e1ec9fed61346831b5c5e65a39cb9dba5c9c568487d4bf653afb892545d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
