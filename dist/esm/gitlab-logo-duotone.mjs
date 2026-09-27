export const name="gitlab-logo-duotone";
export const id="dl_3ba69d2714e347048723";
export const url=new URL("../icons/gitlab-logo-duotone.svg?v=5da8abe0850bb8b762cb852cfb9499894b05caf0041901f101d1929b1c3ced10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
