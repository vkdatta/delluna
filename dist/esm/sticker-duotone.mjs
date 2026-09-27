export const name="sticker-duotone";
export const id="dl_3bb67e0934ab16ee6800";
export const url=new URL("../icons/sticker-duotone.svg?v=0750e49491c517c0adfa6028bc747c12c062f5b44c8eaf6230cc3b3a6642a9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
