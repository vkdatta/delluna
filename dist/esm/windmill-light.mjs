export const name="windmill-light";
export const id="dl_99fb51d1f67144af9d08";
export const url=new URL("../icons/W/windmill-light.svg?v=eca87073b1ba277cb469fccbef97bebb3dfa8cc6d4216eb0e038fce703951364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
