export const name="sun-dim-duotone";
export const id="dl_c77bc2875dad4f8eb250";
export const url=new URL("../icons/S/sun-dim-duotone.svg?v=6a6c15fb0c8b260b8ba911be6ecc7e16789584421ef036f71b14995982c1e924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
