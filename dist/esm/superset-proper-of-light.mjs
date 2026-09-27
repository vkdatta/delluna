export const name="superset-proper-of-light";
export const id="dl_6ba5d12a4cc45c2e8b69";
export const url=new URL("../icons/superset-proper-of-light.svg?v=18bff5c8af784936bd300f3e2e2ab88ccefd86ba3319db52eb7ace203be7a754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
