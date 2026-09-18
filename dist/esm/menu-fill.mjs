export const name="menu-fill";
export const id="dl_44b020b40b4f4506acec";
export const url=new URL("../icons/menu-fill.svg?v=7d6253bc706e07012a5de768fe2defd92d11ef848acee44eb000f613d60f4eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
