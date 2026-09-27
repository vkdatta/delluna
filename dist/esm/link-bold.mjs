export const name="link-bold";
export const id="dl_41f03331d0c04def8e71";
export const url=new URL("../icons/link-bold.svg?v=6b75b94b70b9da0785af8fbf8164ecfc8b66039c32de5ca7701433c82cdb0929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
