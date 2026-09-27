export const name="line-segments-fill";
export const id="dl_9153fddabdc6421ab1f6";
export const url=new URL("../icons/line-segments-fill.svg?v=a175e7643aff9209d42dd95cff1179197fa21130861385f9eaeeb9118d97596d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
