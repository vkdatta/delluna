export const name="accessible_menu-fill";
export const id="dl_ddeca0e5d51c4d72b3da";
export const url=new URL("../icons/A/accessible_menu-fill.svg?v=38c3148873b4e42f2530c076541fb833740fcecffc07e01703cc863cb8eeaf57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
