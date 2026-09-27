export const name="edit_off-fill";
export const id="dl_bfd98f893c976fea20f6";
export const url=new URL("../icons/edit_off-fill.svg?v=b266e5bed0671892347ce703218060e2185abedf8554efdfe5dfe13a01471055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
