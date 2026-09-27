export const name="print_add-fill";
export const id="dl_aea1f5818155c4b75632";
export const url=new URL("../icons/print_add-fill.svg?v=c9e74800353a697c97349cb6ae9fda62a4db67be61f2c4bf37fd79d450f585d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
