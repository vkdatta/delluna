export const name="git-commit-light";
export const id="dl_ad5e2f6f9ce64dcda94e";
export const url=new URL("../icons/git-commit-light.svg?v=32f0b1d98d704772e6625d05c3d9aa87afed7f2e1d7ed5e6057c9242cb4f4596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
