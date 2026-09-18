export const name="view_compact-fill";
export const id="dl_6799c38ec4ef4d15877b";
export const url=new URL("../icons/view_compact-fill.svg?v=eeb53ec6aab984155cf6c914b30f9385cdf3e2d8addbdc991d18a3320260c0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
