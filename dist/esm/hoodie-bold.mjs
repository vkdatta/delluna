export const name="hoodie-bold";
export const id="dl_bcd7ba1abfa5416db525";
export const url=new URL("../icons/hoodie-bold.svg?v=16a4655126f666ca220751d396a68c039fa4c70875b8b81c759750bae61a8e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
