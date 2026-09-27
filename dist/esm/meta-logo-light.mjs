export const name="meta-logo-light";
export const id="dl_f19a33fec9b5486b8033";
export const url=new URL("../icons/meta-logo-light.svg?v=42a96324bdd39c22cd5dace89289a3130c4d9ab2f4ff28e9ef4404c44df7bb57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
