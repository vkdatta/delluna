export const name="git-commit";
export const id="dl_17be6ce7e0b146a0ae1c";
export const url=new URL("../icons/git-commit.svg?v=16aa0a649527cff28ea97bb74bf2560cd6e686285ce2e723f8ac8039c3a61e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
