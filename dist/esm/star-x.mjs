export const name="star-x";
export const id="dl_d7af8668f37f4092a18a";
export const url=new URL("../icons/star-x.svg?v=d40acf18762074aa52987761a670189730cada80bd96bbabdc8971d99728ad10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
