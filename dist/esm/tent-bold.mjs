export const name="tent-bold";
export const id="dl_dbe4167e79404807bd8b";
export const url=new URL("../icons/T/tent-bold.svg?v=b82740e860717e50e05c596e03dfbb933557db5e8799157494d1a6639c116c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
