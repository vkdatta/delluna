export const name="power-light";
export const id="dl_a22f7f352e6d4cb3af89";
export const url=new URL("../icons/power-light.svg?v=f776c1f655a12c58bb8ad72523c1944dfe3f4094526cdea346c3c51c00591061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
