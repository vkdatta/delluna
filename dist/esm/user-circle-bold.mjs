export const name="user-circle-bold";
export const id="dl_93bec785be8948ddfc3b";
export const url=new URL("../icons/user-circle-bold.svg?v=f8573db0d7b668f5a8f227d2228879f06b25021b839ce522f7830cb119b7bcbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
