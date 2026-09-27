export const name="paint-brush-light";
export const id="dl_f9f020bfda2b469291b3";
export const url=new URL("../icons/paint-brush-light.svg?v=ef52c2873b8e85d44b494057bc4ce222e4b8ba185cb2938902b7e04d2f1af077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
