export const name="pizza-light";
export const id="dl_14a5435102c04d9e9557";
export const url=new URL("../icons/pizza-light.svg?v=a2c2d70a5a25cbd630a15f27252a9a0f4a675530c8a7719e747fd7935833fd11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
