export const name="wheelchair-motion-duotone";
export const id="dl_4b11ae7deea2d68b63fd";
export const url=new URL("../icons/wheelchair-motion-duotone.svg?v=5ce1463fef104d2c721187d778142b5b25585e3663e91b69f761d747132a33c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
