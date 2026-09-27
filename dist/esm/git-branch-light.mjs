export const name="git-branch-light";
export const id="dl_d20d2712a4234fa58043";
export const url=new URL("../icons/git-branch-light.svg?v=220b0dc53f2e219d4e4ac969c50f598b354c5e135f1fe52d8af420226dc3567f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
