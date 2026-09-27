export const name="gitlab-logo-duotone";
export const id="dl_3ba69d2714e347048723";
export const url=new URL("../icons/gitlab-logo-duotone.svg?v=0586a860498ac142e881abb5c4c5922e4a80f08c904c06df59f5dc54836aaebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
