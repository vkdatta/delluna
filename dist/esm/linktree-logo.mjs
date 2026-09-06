export const name="linktree-logo";
export const id="dl_06ff3d16238440bfabdd";
export const url=new URL("../icons/linktree-logo.svg?v=fc48ff073d83c1c249919fa694a73406d1703aeef759cfd99447d64e69e98b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
