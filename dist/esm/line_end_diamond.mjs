export const name="line_end_diamond";
export const id="dl_c8945a06d1ebaca76f9f";
export const url=new URL("../icons/line_end_diamond.svg?v=2d5577c94c59143a35deb191f7a380f335df171ebc7d90fe2510f8ff4efd2855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
