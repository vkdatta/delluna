export const name="ink_highlighter-fill";
export const id="dl_414dbc033ba96dcbb60c";
export const url=new URL("../icons/ink_highlighter-fill.svg?v=5e02ce62658ee557c737f7cfd4ee3243a0911629e7083bfeb8ee6ac30dfd5c43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
