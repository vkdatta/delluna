export const name="number-square-nine-duotone";
export const id="dl_e40b3dbd907348e09f0b";
export const url=new URL("../icons/number-square-nine-duotone.svg?v=606e182c4e31c54fe28c0609e44dc008c486cfd3adc861be11306fc6e5f830d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
