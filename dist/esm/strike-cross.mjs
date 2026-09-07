export const name="strike-cross";
export const id="dl_7396fed5de054a049798";
export const url=new URL("../icons/close/strike-cross.svg?v=6b5dc04c12f86cd7ef96dc29561fda23ec657b31363a4f30c99ee21f881b4b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
