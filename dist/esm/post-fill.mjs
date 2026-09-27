export const name="post-fill";
export const id="dl_5a1618ae38300b44f227";
export const url=new URL("../icons/post-fill.svg?v=16ffa14916e02c18e34e048a28515631d767d1e40f1935f63d488258ab81da02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
