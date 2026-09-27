export const name="sd-fill";
export const id="dl_aaf1b114d06b07de0730";
export const url=new URL("../icons/sd-fill.svg?v=9911cb28fe23287baefcb81a1a5bc8c7b521ea3fd8e74693e0551adc849b8fde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
