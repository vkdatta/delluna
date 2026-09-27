export const name="lucid_1-cloud-lightning";
export const id="dl_084350543f2d4048b549";
export const url=new URL("../icons/lucid_1-cloud-lightning.svg?v=9607a85b5b5fd25520ab85b966bf296611178cc3b6a584772fa3123956490cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
