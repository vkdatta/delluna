export const name="scroll-light";
export const id="dl_6fce46dc4fe525422a33";
export const url=new URL("../icons/scroll-light.svg?v=05d860f62b5f2f4b0dd236b2aec654a28168fbc13464572f47bc17c7fa3ac8b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
