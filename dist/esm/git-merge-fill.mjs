export const name="git-merge-fill";
export const id="dl_3e41197fa34745c5a2c5";
export const url=new URL("../icons/git-merge-fill.svg?v=d67df94de74d8b8501b83d68b38e3e0bfd3833feea2d307b3825cc433a5bba5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
