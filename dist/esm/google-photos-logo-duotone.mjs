export const name="google-photos-logo-duotone";
export const id="dl_aabd62937eb64687b913";
export const url=new URL("../icons/google-photos-logo-duotone.svg?v=c5a6bcc716673a04c2266833f3c5e5cf7b6b261d27f4cdfd6ec05ee4bf7c34e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
