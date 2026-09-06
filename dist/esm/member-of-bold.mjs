export const name="member-of-bold";
export const id="dl_0cd7397c7b21423c902a";
export const url=new URL("../icons/member-of-bold.svg?v=16e225f055680b638ca6115dcd9603db1814256054750b800bc0c5b0d6e3253a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
