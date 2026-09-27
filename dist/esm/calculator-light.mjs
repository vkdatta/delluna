export const name="calculator-light";
export const id="dl_f85ec27f37d04c3192f8";
export const url=new URL("../icons/calculator-light.svg?v=8c3d4b2682c71ad5a6cbe2a1a105259c683486e1dc439f2f6969b51e30b262b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
