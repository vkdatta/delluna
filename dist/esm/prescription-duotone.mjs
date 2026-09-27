export const name="prescription-duotone";
export const id="dl_c6fa6c44ce3d44939058";
export const url=new URL("../icons/prescription-duotone.svg?v=61829361924a9cc864a97bedb368bc19ea3eb60f9e1404b2d19d833f6b9a0ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
