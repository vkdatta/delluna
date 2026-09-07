export const name="globe-simple-bold";
export const id="dl_9f39a833a5c44b4f83c9";
export const url=new URL("../icons/globe-simple-bold.svg?v=578dc03967aaaf6c1d74221d571132eae0e4688461d582eda84ed7659d7a947f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
