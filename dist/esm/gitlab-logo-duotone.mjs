export const name="gitlab-logo-duotone";
export const id="dl_3ba69d2714e347048723";
export const url=new URL("../icons/gitlab-logo-duotone.svg?v=7972849b9a80ce4aa7951e7a53f6941e9face55e7fefa326573d080752b021e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
