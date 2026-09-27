export const name="accessible_menu-fill";
export const id="dl_ace0f0921f3f7f7cd158";
export const url=new URL("../icons/accessible_menu-fill.svg?v=9eb6893e8ecfe3897d90a120419a4472fba6170f46af22f064f4c5874225e40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
