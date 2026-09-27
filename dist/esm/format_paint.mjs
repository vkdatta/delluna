export const name="format_paint";
export const id="dl_2d3a6d1dc0b654b93a39";
export const url=new URL("../icons/format_paint.svg?v=3f37667ee6c526a278612c57353d78f3a5a0f3d98d20e0083396e1f626020e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
