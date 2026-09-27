export const name="lucid_1-atom";
export const id="dl_0562759199084659ad49";
export const url=new URL("../icons/lucid_1-atom.svg?v=b13593ecd057570e75efc12f19ce2882075c296465d20a9f5ce908bd311bbf7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
