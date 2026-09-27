export const name="mouse-simple-duotone";
export const id="dl_c1d20e7532c4444ead52";
export const url=new URL("../icons/mouse-simple-duotone.svg?v=5c67b1baeb8a745ce4a49015e542d2f9dc3f64678bf027bc745aa1e2566753a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
