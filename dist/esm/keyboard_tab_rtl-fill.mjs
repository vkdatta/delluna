export const name="keyboard_tab_rtl-fill";
export const id="dl_f4708683720d11f6e41c";
export const url=new URL("../icons/keyboard_tab_rtl-fill.svg?v=dfd5741d57a434252e90615376a33360dec63740d5c2af62f2ba34e839ddfd22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
