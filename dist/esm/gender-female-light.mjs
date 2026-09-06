export const name="gender-female-light";
export const id="dl_31af3578ac174b4db456";
export const url=new URL("../icons/gender-female-light.svg?v=cbe9c38360667a0b644796f0695f897e3d901ff3735fcabf392100fbd54aa68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
