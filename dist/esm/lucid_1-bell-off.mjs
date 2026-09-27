export const name="lucid_1-bell-off";
export const id="dl_3dee5997347f422b8180";
export const url=new URL("../icons/lucid_1-bell-off.svg?v=e64cf75ef881829825312ddab88720fa736ca790298ea47f8f0f42a579be9ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
