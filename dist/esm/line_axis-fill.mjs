export const name="line_axis-fill";
export const id="dl_a7491a332563974a5f33";
export const url=new URL("../icons/line_axis-fill.svg?v=4d41e6e0afdb7efe4dcd02ceadb56a8aa652cb056031b76c597b0b891e0185fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
