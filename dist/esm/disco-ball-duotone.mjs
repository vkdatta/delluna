export const name="disco-ball-duotone";
export const id="dl_d018b879ee4b4e309154";
export const url=new URL("../icons/disco-ball-duotone.svg?v=5266a4d43773d40ada4cad3e8dd7c6d9801efca7abe635ee6afab70538596cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
