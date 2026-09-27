export const name="ranking-fill";
export const id="dl_46dadd7549204995956a";
export const url=new URL("../icons/ranking-fill.svg?v=7080d23e284c2014de6cdf63d146fbda2b8b48db3ac80c8beb850244c67a6e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
