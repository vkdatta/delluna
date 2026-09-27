export const name="tote";
export const id="dl_29bb299833b75105f58b";
export const url=new URL("../icons/tote.svg?v=c5485f9008716b26bfa33d1ccb16208196ae95c77780688608c37ca643181d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
