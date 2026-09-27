export const name="wb_iridescent-fill";
export const id="dl_bc8e14ef50d5b81ee3ae";
export const url=new URL("../icons/wb_iridescent-fill.svg?v=f43eefba481c9d3b307c9663761e0facb4f7dec6720e092a35dd28dcbb8c7773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
