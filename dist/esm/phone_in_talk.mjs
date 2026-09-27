export const name="phone_in_talk";
export const id="dl_d5085620c74e035b05bd";
export const url=new URL("../icons/phone_in_talk.svg?v=f92f2ce0edd1985a868a744a35e4baf95ba78d44ceaefcda2da1e73c3e4e0e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
