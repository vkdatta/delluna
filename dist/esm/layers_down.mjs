export const name="layers_down";
export const id="dl_a807d1b2b23f3d56f61f";
export const url=new URL("../icons/layers_down.svg?v=f306a592f13d2abb6bf7654917b732f8541b865ad28e3fef5dc3e5e3b9461493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
