export const name="angle-fill";
export const id="dl_02607e362f3c418b8694";
export const url=new URL("../icons/angle-fill.svg?v=427d86f00be08f970964d55461df822be437c4de853b4b69bca77e540775b6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
