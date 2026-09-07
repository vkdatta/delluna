export const name="orange-light";
export const id="dl_a87663a47dd74af2a7d8";
export const url=new URL("../icons/orange-light.svg?v=3bf020e49b485b39bbe25776bf48a917fef5e30af3bea304ba2129c9fb00917a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
