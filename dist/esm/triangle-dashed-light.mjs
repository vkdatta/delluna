export const name="triangle-dashed-light";
export const id="dl_956ce86cc637e71eea44";
export const url=new URL("../icons/triangle-dashed-light.svg?v=c39135c5957e03efd673b631457ffb5fd679e60a909910e45dc37795d5a634d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
