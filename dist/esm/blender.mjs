export const name="blender";
export const id="dl_2783b421ca8f9fd900da";
export const url=new URL("../icons/blender.svg?v=ea11f4bebbb6aa0db24f556c2e0c6e0dede98f8d1435c5eb6f16384ec7f54e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
