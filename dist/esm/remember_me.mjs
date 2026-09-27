export const name="remember_me";
export const id="dl_1b378c9530ce7ca06096";
export const url=new URL("../icons/remember_me.svg?v=41d49915c4b5a4b4fbefb2a9c363c26c90e52568fad63e6c567d2bb8b85a2f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
