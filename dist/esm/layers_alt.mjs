export const name="layers_alt";
export const id="dl_1cfb67283bb1b12dc9dc";
export const url=new URL("../icons/layers_alt.svg?v=f9174de7c857e6953f08aad096689eca49d15edf623ce9399a7b2cc43aad7ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
