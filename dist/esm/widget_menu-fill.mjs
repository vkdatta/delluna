export const name="widget_menu-fill";
export const id="dl_f1d5a93081774e17bf1e";
export const url=new URL("../icons/W/widget_menu-fill.svg?v=ec4421b8fc11eea02bc6b0f5a9dcaea2aba9b30d611e09f8d42c6078055c53e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
