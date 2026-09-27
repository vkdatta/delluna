export const name="format_h5-fill";
export const id="dl_11a107df2a33eae16e3b";
export const url=new URL("../icons/format_h5-fill.svg?v=8786829777153b246aea621ce18c698831f98e2f570b4578a94b478e9c37b42a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
