export const name="google-photos-logo-light";
export const id="dl_9ae0f6982e4f4098a473";
export const url=new URL("../icons/google-photos-logo-light.svg?v=1719c0a870b93bda91a103047b883a55c007f00003bce62221898968e6ffbe29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
