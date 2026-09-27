export const name="deblur-fill";
export const id="dl_ad60e5566740d1a9ebca";
export const url=new URL("../icons/deblur-fill.svg?v=40bf42c1e7f14c665fe9d0958e66ba58c266a42d46946ca222470567e3684666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
