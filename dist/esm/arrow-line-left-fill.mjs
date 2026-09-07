export const name="arrow-line-left-fill";
export const id="dl_efa9cc3ec7024f1d82b9";
export const url=new URL("../icons/arrow-line-left-fill.svg?v=655190cf87622fa4005b5d54a1215e7646368bfddbcd4984459eedd86ce88ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
