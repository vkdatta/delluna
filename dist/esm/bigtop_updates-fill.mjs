export const name="bigtop_updates-fill";
export const id="dl_a7766cfce39784122cc1";
export const url=new URL("../icons/bigtop_updates-fill.svg?v=a3f251fa5c0ebec9f1eaac27fd2f9fbab613e30bb3aef3bf2a310c7e16336316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
