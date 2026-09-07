export const name="sliders-light";
export const id="dl_52bd8259ff334137831c";
export const url=new URL("../icons/S/sliders-light.svg?v=82b1c2bfeaf6a54476172e219eecda94f4516a7800a3b85b5ba68ec95e6215e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
