export const name="bug_report-fill";
export const id="dl_4c2ded49dc72d5f7934c";
export const url=new URL("../icons/bug_report-fill.svg?v=e19a34e9e207a2a747fb0c4cf32e4e1f633cf38d76f8d811abb696e1ebbc6262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
