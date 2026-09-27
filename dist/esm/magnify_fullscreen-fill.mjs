export const name="magnify_fullscreen-fill";
export const id="dl_024441e55986cb7cd19f";
export const url=new URL("../icons/magnify_fullscreen-fill.svg?v=f5457ed3d8048b6ebaa4785192872e35b1493a0702c7c17e255598147f9449c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
