export const name="tab_unselected-fill";
export const id="dl_990854a45f7a59de9e21";
export const url=new URL("../icons/tab_unselected-fill.svg?v=9a8162ede02ce340e4e4c599efd0905cbe3199e81501b537c41bcacb31cda91b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
