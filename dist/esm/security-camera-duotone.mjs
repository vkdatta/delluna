export const name="security-camera-duotone";
export const id="dl_ad2efa47b7c4f358d9ca";
export const url=new URL("../icons/security-camera-duotone.svg?v=c0b18fde71fb72dfacb327bf0ba2bb45f0b9f7f0657168659ca023ef10e95a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
