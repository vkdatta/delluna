export const name="pencil-circle-fill";
export const id="dl_43743dae8f284bfb9cf7";
export const url=new URL("../icons/pencil-circle-fill.svg?v=a44358d334885e4aa35e3a68557577b37ee3eb483e28e9aad6ade6033c11b928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
