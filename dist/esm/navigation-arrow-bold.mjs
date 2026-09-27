export const name="navigation-arrow-bold";
export const id="dl_8503572e631d44e3bed6";
export const url=new URL("../icons/navigation-arrow-bold.svg?v=9af9a1c1024c4a72378a912ec83e92805edf585cdba1de0baad6d1dd7b9e81df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
