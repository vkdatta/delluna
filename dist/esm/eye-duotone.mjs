export const name="eye-duotone";
export const id="dl_8c9f296442044c1b8f9a";
export const url=new URL("../icons/eye-duotone.svg?v=695dc8f0c5793b700905ced99225cb6bd891cd49ba5f00eb3eaff744a4bd1cf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
