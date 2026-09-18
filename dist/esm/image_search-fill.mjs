export const name="image_search-fill";
export const id="dl_0849316467834694b87e";
export const url=new URL("../icons/I/image_search-fill.svg?v=83b40e788cb1e57a2e1925960f519f7f086f1d5ad2eb732b0867a5c8bb395a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
