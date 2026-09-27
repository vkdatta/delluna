export const name="view_sidebar-fill";
export const id="dl_4c07f5519617d497fc7d";
export const url=new URL("../icons/view_sidebar-fill.svg?v=17a728c6652ff5fe95369e0b7ce2189e27756cfdbb25c3387354d5e05b444d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
