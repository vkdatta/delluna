export const name="source_environment-fill";
export const id="dl_cc585da85b6341cab991";
export const url=new URL("../icons/S/source_environment-fill.svg?v=b5d8fb83e54b53ac758dfd485b09274868ecec261d179a03c7d5cb2787d59b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
