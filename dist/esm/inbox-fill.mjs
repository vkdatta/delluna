export const name="inbox-fill";
export const id="dl_c6af84b987dd4e87b8c3";
export const url=new URL("../icons/inbox-fill.svg?v=bae1aa9fc217fcca33e84a698a5908b69b7d2fe160366a4e3625f37128c6b26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
