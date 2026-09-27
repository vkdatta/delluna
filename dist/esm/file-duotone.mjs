export const name="file-duotone";
export const id="dl_dc46bff1bc2a4c8fb351";
export const url=new URL("../icons/file-duotone.svg?v=7487fbce46a4e4a0e286ed3174d1a32daa60b12be9581afe3ca3cbadc00fc6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
