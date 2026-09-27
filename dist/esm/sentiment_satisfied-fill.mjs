export const name="sentiment_satisfied-fill";
export const id="dl_cac839d8e55aa690c1f1";
export const url=new URL("../icons/sentiment_satisfied-fill.svg?v=4986f2e84b4c9b9af30208d4ae50badce38698c2195ba0a86d851a30442cb119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
