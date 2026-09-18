export const name="mobile_cast";
export const id="dl_b1cfa5db15d44acd9e5f";
export const url=new URL("../icons/mobile_cast.svg?v=4309c5274bf6c64e6676caf8023e4228d9e13df171c080b9d970b81c55959eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
