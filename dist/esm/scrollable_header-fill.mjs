export const name="scrollable_header-fill";
export const id="dl_ba4783d6792315b071e2";
export const url=new URL("../icons/scrollable_header-fill.svg?v=d30485cca381b2de3fd3148e44c9153969e4592f1362e1a83de8162029f0cc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
