export const name="screwdriver-light";
export const id="dl_b0ff9a929e4446d5aa96";
export const url=new URL("../icons/S/screwdriver-light.svg?v=d570816d418378b72d06c0d0cf206cca44a03e2f05d29f24398c732fac53c1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
