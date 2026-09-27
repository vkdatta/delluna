export const name="threads-logo-light";
export const id="dl_f65d50fdd693b0b0c939";
export const url=new URL("../icons/threads-logo-light.svg?v=6df52f6d2d2a2dc8d22620e34a288bd1add572d8a55cd3cac1109e81f58953fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
