export const name="pencil-ruler-light";
export const id="dl_f349082b90684d7088c7";
export const url=new URL("../icons/pencil-ruler-light.svg?v=15f0e13bb4db07e8fe3f3f4c2a067e396a7f6460dc63197566d4f1a47d30fe0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
