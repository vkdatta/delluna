export const name="pipe-wrench";
export const id="dl_028b83f0a2404f8fbe96";
export const url=new URL("../icons/pipe-wrench.svg?v=daf4acff682f91241926806f0267536762855afcc0d733b01409488bf3ba84d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
