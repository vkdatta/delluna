export const name="tree-structure-bold";
export const id="dl_7be9c04f4c6c41cd98ce";
export const url=new URL("../icons/tree-structure-bold.svg?v=b766f9790d19fefb0fd393484731890d69a6089724bb895435c69496e4d5f467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
