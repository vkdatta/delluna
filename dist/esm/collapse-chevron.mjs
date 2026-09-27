export const name="collapse-chevron";
export const id="dl_3f3bb678e2cd4f16add1";
export const url=new URL("../icons/collapse-chevron.svg?v=53e26336a34b35ce8a334b1abab672d01f2502bab33b25fd17e1cec4c8e91243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
