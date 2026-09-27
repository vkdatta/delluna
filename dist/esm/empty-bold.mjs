export const name="empty-bold";
export const id="dl_c1b23328f84a45f7bb73";
export const url=new URL("../icons/empty-bold.svg?v=1d56f1e4ae8042b9ca0a2337d30b7c339faa3aeeaee293bd84db4601247134f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
