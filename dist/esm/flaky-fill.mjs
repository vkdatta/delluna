export const name="flaky-fill";
export const id="dl_20d6d8d25f4934630f89";
export const url=new URL("../icons/flaky-fill.svg?v=71e48a337e7142f26d34d389789e78a74da1dc177b029b6a1002db0943cff31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
