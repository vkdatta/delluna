export const name="books-thin";
export const id="dl_dd3dbeaa8cd94f5d8f17";
export const url=new URL("../icons/books-thin.svg?v=faabe69258688afd5e09121c17f3f8fd218868148e9e632ed9a417f77a9e3485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
