export const name="git-commit-bold";
export const id="dl_a1a4442c733648ff976d";
export const url=new URL("../icons/git-commit-bold.svg?v=578cf652de491edda83aad5257331eadfa47b5b0a2a4adb285710cf0e02492b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
