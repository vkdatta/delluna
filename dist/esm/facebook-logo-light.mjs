export const name="facebook-logo-light";
export const id="dl_ba838aceccae4018a07c";
export const url=new URL("../icons/facebook-logo-light.svg?v=a617305051c2b6e284e807dc644f3591722dc9612c879cb18485c869cf6b73cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
