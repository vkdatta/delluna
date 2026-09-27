export const name="selection-plus-light";
export const id="dl_43181bfd958a324f624f";
export const url=new URL("../icons/selection-plus-light.svg?v=15a3b7e035e6e7a56affb9204ee99fe81b90cacbb4b47c382e68ae43edc5e036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
