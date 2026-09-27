export const name="query_stats-fill";
export const id="dl_b9ddca0d962bf9e6d588";
export const url=new URL("../icons/query_stats-fill.svg?v=b1c496b23e0a0230e5687d26ee462c275f6de81787cb5dacc809522c0d27c3a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
