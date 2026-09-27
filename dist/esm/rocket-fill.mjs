export const name="rocket-fill";
export const id="dl_1ebe319f5fd04e8aba1c";
export const url=new URL("../icons/rocket-fill.svg?v=51c1e4575934b8eb68cb7d92ceb60c6fb1aa46006d078a2275c511ed92d62edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
