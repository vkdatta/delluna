export const name="nest_farsight_eco";
export const id="dl_e687a7d3b506bd7b4685";
export const url=new URL("../icons/nest_farsight_eco.svg?v=9abe98ff5276defb748a060c5bf6a3a5609336f06f1c247ab9f6367b7589a0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
