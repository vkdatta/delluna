export const name="git-branch-duotone";
export const id="dl_4ead82490dbd4f3caf76";
export const url=new URL("../icons/git-branch-duotone.svg?v=e08a9fa0a1805762d65d9a94c2f01ae26575f1351091ebbb4ccb4cc1d8f12bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
