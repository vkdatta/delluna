export const name="inpatient-fill";
export const id="dl_f2f586aa127dad1d2ce5";
export const url=new URL("../icons/inpatient-fill.svg?v=7602e1d3fa1de8b30f0e7f4d030b7e61eb5ed03e022a5e3e98b2f2653ab9b8cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
