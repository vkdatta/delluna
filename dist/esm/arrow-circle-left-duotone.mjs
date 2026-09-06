export const name="arrow-circle-left-duotone";
export const id="dl_bf670fafe49b41d9ad25";
export const url=new URL("../icons/arrow-circle-left-duotone.svg?v=ebb528477670697dd48844e710ff74ed5c1391ee8644d300ca700fec4306e894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
