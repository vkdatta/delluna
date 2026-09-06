export const name="git-commit-bold";
export const id="dl_a1a4442c733648ff976d";
export const url=new URL("../icons/git-commit-bold.svg?v=9f98f0d349eac63976172ddbd39a325ccb9e2bf2b4a5762e31e64e16397001cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
