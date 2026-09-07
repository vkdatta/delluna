export const name="lucid_3-package-minus";
export const id="dl_6079f666a10442a2809d";
export const url=new URL("../icons/lucid_3-package-minus.svg?v=98cbde527c16ee0b557b653201a80efc672dbf967ba32b425b386a9de184d44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
