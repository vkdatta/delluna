export const name="marker-circle-light";
export const id="dl_d31072c370da41f6bb31";
export const url=new URL("../icons/marker-circle-light.svg?v=7f19502df887ad7ee9c4725ace040f2ac2832441d99943736760f59319b2965e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
