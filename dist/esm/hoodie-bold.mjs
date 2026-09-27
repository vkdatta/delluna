export const name="hoodie-bold";
export const id="dl_bcd7ba1abfa5416db525";
export const url=new URL("../icons/hoodie-bold.svg?v=fb2b2cdcf7e1029e12ba1faa41bf704e1048960abc5c4d89be17490d231c3e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
