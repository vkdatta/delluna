export const name="wave-sine-duotone";
export const id="dl_6d31174124224bb0be60";
export const url=new URL("../icons/W/wave-sine-duotone.svg?v=78adacaeaf3ba2e2bed8d9d2c1c6be819e25253a65b5b045e62c673d3d4ef2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
