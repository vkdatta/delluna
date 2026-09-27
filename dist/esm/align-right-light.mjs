export const name="align-right-light";
export const id="dl_c8759e5696bc41af9182";
export const url=new URL("../icons/align-right-light.svg?v=1d2d3715fe0b3fc10fed6c784e8a2ccff5d92e8c62ddf21c4846d730ed52c843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
