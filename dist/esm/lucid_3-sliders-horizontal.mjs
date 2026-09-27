export const name="lucid_3-sliders-horizontal";
export const id="dl_97203ffc36b34a3f9192";
export const url=new URL("../icons/lucid_3-sliders-horizontal.svg?v=f7321b8cb524e65cd40e0491e48659b6a3a9dcfd3aa553717de3f03fa10b07d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
