export const name="short_stay-fill";
export const id="dl_49eabf03497edb167dff";
export const url=new URL("../icons/short_stay-fill.svg?v=39638275563bb0cacd0a2920922673ce000194cc96d909fed398bb724fee0001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
