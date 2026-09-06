export const name="equals-fill";
export const id="dl_ef04cd1f2b004a34b3e6";
export const url=new URL("../icons/equals-fill.svg?v=ef6058a79895181f7744277c1cd73cf197af8bfb7bf3d36fec300b4f407c488e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
