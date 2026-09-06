export const name="mask-happy-duotone";
export const id="dl_dda28ee9d72a4b8a99db";
export const url=new URL("../icons/mask-happy-duotone.svg?v=3d568039414fd5093bcfccc6c6bb3aa995622933fc6e1aba7a77736dfea72058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
