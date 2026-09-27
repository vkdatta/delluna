export const name="medication-fill";
export const id="dl_4df8177eee8c07ef31e6";
export const url=new URL("../icons/medication-fill.svg?v=71e3ee7bf4d4d4169ba728203b0061250ec5ce809de35d82aabb0cd74531de1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
