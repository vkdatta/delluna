export const name="lucid_3-school";
export const id="dl_fdba5ad9a4994fffab25";
export const url=new URL("../icons/lucid_3-school.svg?v=626356f69c77b5c37a569c1f6a673dab238358f8432b4d8ff18c9b1eb2cd8714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
