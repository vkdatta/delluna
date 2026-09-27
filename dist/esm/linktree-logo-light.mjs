export const name="linktree-logo-light";
export const id="dl_a0ca94d2ac58462da74d";
export const url=new URL("../icons/linktree-logo-light.svg?v=314e5d74d97a34a21d63419fe3dba63ea79e1c421deb072a8b436ee2b28d6127",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
