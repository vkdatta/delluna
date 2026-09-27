export const name="widget_menu-fill";
export const id="dl_cef00121524c3150b375";
export const url=new URL("../icons/widget_menu-fill.svg?v=7d799d958d89de063877572e14537655aebfb16cab5145ca89b584acd416e758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
