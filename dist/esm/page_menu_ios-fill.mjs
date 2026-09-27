export const name="page_menu_ios-fill";
export const id="dl_56bf122dabaf329c024c";
export const url=new URL("../icons/page_menu_ios-fill.svg?v=f1f2e5447d0502fbeeb43fc2ddac311114bf7b229800346b9b913d0460d364e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
