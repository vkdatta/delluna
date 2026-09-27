export const name="dresser-duotone";
export const id="dl_8829e158154546baadcf";
export const url=new URL("../icons/dresser-duotone.svg?v=e472d6651c7f6cda7d494278f7df795199c4a9ad421325d4b3f2f91c508577bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
