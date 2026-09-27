export const name="linkedin-logo-thin";
export const id="dl_351c81e8db95466fb66a";
export const url=new URL("../icons/linkedin-logo-thin.svg?v=010c4ef6750c14b668e5d17897156d1f66be76d2373526337a0ad6e5eb590d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
