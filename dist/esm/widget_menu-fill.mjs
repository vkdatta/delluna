export const name="widget_menu-fill";
export const id="dl_daff2813453a78381c2d";
export const url=new URL("../icons/widget_menu-fill.svg?v=0fc10f5017c325b8d11b4910240d296e188d5a49ff8928ef4774c79d8d9eafbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
