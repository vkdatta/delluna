export const name="lucid_1-axis-3d";
export const id="dl_f0caa143472a4e949420";
export const url=new URL("../icons/lucid_1-axis-3d.svg?v=eedb8eaa9bc4cdae622091966cad08c78e453457ac9766d7c2b1a946fbcfe688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
