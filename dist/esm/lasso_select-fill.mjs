export const name="lasso_select-fill";
export const id="dl_f09add2bcab882a1ac4e";
export const url=new URL("../icons/lasso_select-fill.svg?v=3155a31a5ad60efc17cb1b455126d89ce11c0830453e69d4844a79395130cc87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
