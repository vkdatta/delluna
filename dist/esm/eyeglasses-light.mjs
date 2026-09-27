export const name="eyeglasses-light";
export const id="dl_fe5522c9f38542baace2";
export const url=new URL("../icons/eyeglasses-light.svg?v=d0ac2758b0c3d09f5fd14b2c11e1d5d438230c51e669afcbd86077d5ae9528ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
