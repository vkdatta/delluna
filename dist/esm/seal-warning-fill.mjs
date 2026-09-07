export const name="seal-warning-fill";
export const id="dl_a1670a4128a343a7904f";
export const url=new URL("../icons/S/seal-warning-fill.svg?v=fb579013c31c105690551ed259f06bc35dc200481cf153089766b9d6ec55ecea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
