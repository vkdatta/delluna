export const name="list-numbers-duotone";
export const id="dl_e488218c0781494d83e0";
export const url=new URL("../icons/list-numbers-duotone.svg?v=0fdaa7af8afdadc1649743274e43244188599947cb4be00afef1304da99f3fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
