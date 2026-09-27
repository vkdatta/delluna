export const name="bookmark_star-fill";
export const id="dl_675bf5094becf0a4f2e7";
export const url=new URL("../icons/bookmark_star-fill.svg?v=24e0486647ef6716c99dbf4963eadcbb65d9aed87e50f9afc811fd6c9bdddf8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
