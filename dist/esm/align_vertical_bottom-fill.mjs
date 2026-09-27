export const name="align_vertical_bottom-fill";
export const id="dl_4c40e6b2ff3aa5f450ad";
export const url=new URL("../icons/align_vertical_bottom-fill.svg?v=4fa4b09293adef745ef60de52b7d11800d43588799dc1e645170c85f47015c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
