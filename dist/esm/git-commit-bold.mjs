export const name="git-commit-bold";
export const id="dl_a1a4442c733648ff976d";
export const url=new URL("../icons/git-commit-bold.svg?v=7b670e46f7bad67af40f4c389481a94dee79cbe5cec372e36cbb33fb847524b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
