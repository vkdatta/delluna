export const name="coins-thin";
export const id="dl_80f4b774d88845baad76";
export const url=new URL("../icons/coins-thin.svg?v=1cfa1960b484046732f77a7a35161110b460b1c77e7d500bc41b7bfe1b247f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
