export const name="wrench-fill";
export const id="dl_9ef1cec61f29052c240e";
export const url=new URL("../icons/wrench-fill.svg?v=fdfc79bd6573e972ec7f6d00ec9da783179a35e95557af8571c527ddd2b2cd54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
