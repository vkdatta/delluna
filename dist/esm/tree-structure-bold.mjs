export const name="tree-structure-bold";
export const id="dl_7fcdefa08280ed7d2b3c";
export const url=new URL("../icons/tree-structure-bold.svg?v=ea5c12ebaffa6e4a75d5d7c74a37245d34752f6e1a23bb512884f0986fd1c214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
