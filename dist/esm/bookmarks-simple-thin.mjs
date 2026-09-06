export const name="bookmarks-simple-thin";
export const id="dl_65af7b22179d45dbabb9";
export const url=new URL("../icons/bookmarks-simple-thin.svg?v=9d66aeb122717edbbe298c641faa4e884f9b3c918df911f1d90befcbdc414860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
