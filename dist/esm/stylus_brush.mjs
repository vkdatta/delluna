export const name="stylus_brush";
export const id="dl_4b074d90e8f7d3db30ba";
export const url=new URL("../icons/stylus_brush.svg?v=84c958ab3420af128325b819f10927177d63fda88fcb32723fab70408964a903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
