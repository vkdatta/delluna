export const name="boot-fill";
export const id="dl_3c966ba0713344a2a6da";
export const url=new URL("../icons/boot-fill.svg?v=19a56d152025c1d1c940725a41c673e248b94ab1bc18325c5c8a248d3f8a714f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
