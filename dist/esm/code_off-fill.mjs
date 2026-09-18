export const name="code_off-fill";
export const id="dl_d322651d66a546cabbc2";
export const url=new URL("../icons/code_off-fill.svg?v=f012ef2f1d38377b6409b676ca7c30d93d01c8f66e3a12179c4d5aa94a97f51b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
