export const name="vibrate-duotone";
export const id="dl_dc9cb14f853aaf282558";
export const url=new URL("../icons/vibrate-duotone.svg?v=905094d602ec97bca08bfc930559740ae3c3b42c501bc6b81bc2b45c72a02a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
