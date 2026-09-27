export const name="intersect-square-bold";
export const id="dl_6a084f370d124cf086f2";
export const url=new URL("../icons/intersect-square-bold.svg?v=c3959923f9c4fce30f8f213019314539dfa74b6e45fa4f03dc8cbb438211f030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
