export const name="elevation";
export const id="dl_1d1fe416116f98f747b8";
export const url=new URL("../icons/elevation.svg?v=eda3117fc5540cc2ba8c63d3250261e67b44590d7a5aa5d8c5501a97bd699a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
