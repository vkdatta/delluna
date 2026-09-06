export const name="git-merge-fill";
export const id="dl_3e41197fa34745c5a2c5";
export const url=new URL("../icons/git-merge-fill.svg?v=174db20fccb3a9de9381510587a92cac104fd626e083f0371731afa8594f9c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
