export const name="display_add-fill";
export const id="dl_1041c4546e62ea124854";
export const url=new URL("../icons/display_add-fill.svg?v=087a1ce96f2881890c0741a7ef4079d5c32d63cf892f6e4afcdbe32efdaf2b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
