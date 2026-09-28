export const name="user";
export const id="dl_0078e708c1df5ccccce1";
export const url=new URL("../icons/user.svg?v=787434f7fef95f20e137d309d3c6b8b471548c55c9dfc137ae10625d70959d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
