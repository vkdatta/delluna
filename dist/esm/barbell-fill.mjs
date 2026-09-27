export const name="barbell-fill";
export const id="dl_1055e1a261dc4756bbb2";
export const url=new URL("../icons/barbell-fill.svg?v=c1267a2ba1869c2ae6fc70b5c1552af0b60a81300eece74be488f181b3370416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
