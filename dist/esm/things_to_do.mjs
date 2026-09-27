export const name="things_to_do";
export const id="dl_33104d1006cf91f32e9c";
export const url=new URL("../icons/things_to_do.svg?v=30e78beed42203be1f64c02825373ea28964cdafbf9958ab46f62cdb701f71d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
