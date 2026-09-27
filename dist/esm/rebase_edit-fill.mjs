export const name="rebase_edit-fill";
export const id="dl_2facd1f5a1d6aa156ec8";
export const url=new URL("../icons/rebase_edit-fill.svg?v=d4be9da710481a27ac06310e69f859427e7d888910a5bca0eff16070bd74b12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
