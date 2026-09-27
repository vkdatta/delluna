export const name="heart-duotone";
export const id="dl_588ec46e8741403898cb";
export const url=new URL("../icons/heart-duotone.svg?v=2a3d45ee7b31e88644829caecd78f5e11aa0951c1f91aafde3cb9fb6aa4ace00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
