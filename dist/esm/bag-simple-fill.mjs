export const name="bag-simple-fill";
export const id="dl_cd53db39c03c4d1fa412";
export const url=new URL("../icons/bag-simple-fill.svg?v=196836fbebe3faa9dc88c824eaf0c84d18784f8ee8330c76203f4ea0a671ac72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
