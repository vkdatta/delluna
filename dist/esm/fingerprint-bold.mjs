export const name="fingerprint-bold";
export const id="dl_30edb70b8b944e209f61";
export const url=new URL("../icons/fingerprint-bold.svg?v=46c27436934674497773a8c8dd27da1116f631a352d62f0a9fcfe28ca2fab3db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
