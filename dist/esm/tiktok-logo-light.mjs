export const name="tiktok-logo-light";
export const id="dl_266a813587cf9f9c7074";
export const url=new URL("../icons/tiktok-logo-light.svg?v=291163535cf7383ee4168b811503d6849bfd587f2197d968f5bcf23f6cb9298c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
