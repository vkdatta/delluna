export const name="clover-light";
export const id="dl_bc62fab54ad343718388";
export const url=new URL("../icons/clover-light.svg?v=03c03bad353bd9beff08b94cb609d9c00bbb135ecb8786105992386abd772bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
