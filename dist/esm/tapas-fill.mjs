export const name="tapas-fill";
export const id="dl_00f137afa393468ea8a9";
export const url=new URL("../icons/tapas-fill.svg?v=d896948efed6e56c3fd0656864ed7ff6023e1e7cfda9d6066159fd507354f1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
