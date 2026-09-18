export const name="fire_extinguisher-fill";
export const id="dl_1cbb887029844ecfb500";
export const url=new URL("../icons/fire_extinguisher-fill.svg?v=646066a834cda450f05682a981d7b6a299b5b1092d1f7e46deab950f107f9b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
