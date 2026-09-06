export const name="linktree-logo-duotone";
export const id="dl_5d59b1c36d2b477fa09d";
export const url=new URL("../icons/linktree-logo-duotone.svg?v=b45de9534ee5edf88cae5f66b34f81548c9c3d79429705329549bdd65b981a74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
