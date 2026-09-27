export const name="lucid_3-panel-left-open";
export const id="dl_74e3a13a1eba46e78e2f";
export const url=new URL("../icons/lucid_3-panel-left-open.svg?v=4ad9a348ee16158ce31c350ea388fd1e69134a0b49413f574cba9f25b9bf9a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
