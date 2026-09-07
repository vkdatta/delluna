export const name="soccer-ball-duotone";
export const id="dl_35010801e2234486a602";
export const url=new URL("../icons/S/soccer-ball-duotone.svg?v=95c2b16b6bbe07f1b484d0abc87b7dc4d218da022466cd874d000089c64ea466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
