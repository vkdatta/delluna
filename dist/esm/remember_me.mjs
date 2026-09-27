export const name="remember_me";
export const id="dl_ffef06732e2e30aa0d48";
export const url=new URL("../icons/remember_me.svg?v=c98f697d6db3e35ee37638d0b39a5f123033653cd88a2188ae344da85064dee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
