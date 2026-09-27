export const name="page_footer-fill";
export const id="dl_b1d02212f2ee77492f9c";
export const url=new URL("../icons/page_footer-fill.svg?v=9d8f17a262b5e64f1a3034f14e89faf1258e694889632603423d84d4e659e56c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
