export const name="flower-tulip-duotone";
export const id="dl_aaa66fc90e8645a09625";
export const url=new URL("../icons/flower-tulip-duotone.svg?v=6b8d480d83f296e56d9d973f24bf16676258aae703b418fdaf5c490a034f8d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
