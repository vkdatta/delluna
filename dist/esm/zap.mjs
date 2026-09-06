export const name="zap";
export const id="dl_b7554e601ec84c9dba78";
export const url=new URL("../icons/zap.svg?v=6d0949f3aa044b82ca4a25102bc177e3b2a43caba26c97603bdff4bdb4c2603f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
