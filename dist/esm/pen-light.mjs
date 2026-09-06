export const name="pen-light";
export const id="dl_f666ca0fa3324227ad96";
export const url=new URL("../icons/pen-light.svg?v=58e4d1def9b0036d98429c3eda06620c6e5ee3c8e92c1a44ab989aa07bc01496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
