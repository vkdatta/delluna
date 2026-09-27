export const name="arrow-square-in-fill";
export const id="dl_279380e356194fd6bc4c";
export const url=new URL("../icons/arrow-square-in-fill.svg?v=4a2ea590ae06279fb072e02f702915f4f34e56bddfe1a9526cba8d80eeb97890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
