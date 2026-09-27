export const name="pan_tool";
export const id="dl_635b55cb11452ef62510";
export const url=new URL("../icons/pan_tool.svg?v=069cb315fe69e137492e78f4b7e1feb4d967bf10e419cdf60ba562b13728d15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
