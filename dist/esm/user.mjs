export const name="user";
export const id="dl_733c16b0b3f245c78a03";
export const url=new URL("../icons/U/user.svg?v=787434f7fef95f20e137d309d3c6b8b471548c55c9dfc137ae10625d70959d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
