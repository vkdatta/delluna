export const name="phone-pause-duotone";
export const id="dl_f5dd2ddd61fb40839809";
export const url=new URL("../icons/phone-pause-duotone.svg?v=630d6af95ecea7763a4a8a1814c47017782170e9ef96d38f3a40e82a74f34779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
