export const name="folder_limited";
export const id="dl_20102c48bf05fe563997";
export const url=new URL("../icons/folder_limited.svg?v=1d6c4f81d4220fbd767910be205a922dae84f08324ffe4a675d93120eeafbacf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
