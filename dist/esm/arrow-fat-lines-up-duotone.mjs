export const name="arrow-fat-lines-up-duotone";
export const id="dl_f38e33472d504fc996cf";
export const url=new URL("../icons/arrow-fat-lines-up-duotone.svg?v=948c1ac0b9fcb74f42ab64ff6299753196c4a3731dcd243b42833a1f3abaad32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
