export const name="patient_list";
export const id="dl_1818f92eabbfbe80563c";
export const url=new URL("../icons/patient_list.svg?v=5bed298612fc24ae13abdde17df188506852d7d3e5ab36cd30aff9a2ae7bef3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
