export const name="brackets-square-fill";
export const id="dl_4504c3228e9841dfb2b2";
export const url=new URL("../icons/brackets-square-fill.svg?v=7169c2fc8865f7af574c4cfd3819971f58f29760e8b5d23f6cb44257ffdda046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
