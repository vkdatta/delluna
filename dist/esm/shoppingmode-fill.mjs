export const name="shoppingmode-fill";
export const id="dl_e91d1532c34d836f8667";
export const url=new URL("../icons/shoppingmode-fill.svg?v=8dd817c5e7d086b5845b24b564d693157cb740731b0827c8b9146571ee67a3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
