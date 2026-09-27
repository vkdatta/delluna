export const name="folder-star";
export const id="dl_cdbaf09af6444eb09bdc";
export const url=new URL("../icons/folder-star.svg?v=bb1e6b923e28bac5e01f51c17d06b1e71e7d397a89f673377a9692bc299af3a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
