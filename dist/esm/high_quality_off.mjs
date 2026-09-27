export const name="high_quality_off";
export const id="dl_66ad8aa092f504411a01";
export const url=new URL("../icons/high_quality_off.svg?v=08a60cc52535bd82f851627d2c355dfd7ca578019440abda3aee751e8d3e4420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
