export const name="menu-right";
export const id="dl_07fd89d313904600be83";
export const url=new URL("../icons/menu-right.svg?v=47b0fff0e17091118406188b1849fe2f45506ad576b8a5b180ce5f35789ff742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
