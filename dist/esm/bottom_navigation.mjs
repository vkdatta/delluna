export const name="bottom_navigation";
export const id="dl_a00d25d0f0c44b0b1074";
export const url=new URL("../icons/bottom_navigation.svg?v=5ad58a9cdd2d0e92f8a9d3883804e03f19c05e4491e89b1cf3cd9182d432ca7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
