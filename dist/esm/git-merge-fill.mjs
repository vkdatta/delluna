export const name="git-merge-fill";
export const id="dl_3e41197fa34745c5a2c5";
export const url=new URL("../icons/git-merge-fill.svg?v=70f614645e733ce4c466855287c26c5f9e5a8f8484b0259d661bbee3d89f2e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
