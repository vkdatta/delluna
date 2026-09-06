export const name="git-branch-light";
export const id="dl_d20d2712a4234fa58043";
export const url=new URL("../icons/git-branch-light.svg?v=3ee88ddb0e3723b239ba49986bfe299bf0fdf95151d36388e08bf66ce7a936f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
