export const name="orange-light";
export const id="dl_a87663a47dd74af2a7d8";
export const url=new URL("../icons/orange-light.svg?v=3d2c90c14f7fb1c67c307fb42b9f2947a00780b199e59eccf8490105526bdeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
