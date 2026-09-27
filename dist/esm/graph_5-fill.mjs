export const name="graph_5-fill";
export const id="dl_29c93749f04fdfa91edd";
export const url=new URL("../icons/graph_5-fill.svg?v=c0cd783b06a9dec2e091f29d9839c7fe14bd597dc4841f7570360208b5299b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
