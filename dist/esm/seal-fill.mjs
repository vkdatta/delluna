export const name="seal-fill";
export const id="dl_8977e575cfd3bb9ea499";
export const url=new URL("../icons/seal-fill.svg?v=f33839439cafe886677955a92aae34c5e7c6baae48b58d397e8862b7a2bc8cad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
