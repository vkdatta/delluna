export const name="disabled_by_default";
export const id="dl_0108904b40e53f9791eb";
export const url=new URL("../icons/disabled_by_default.svg?v=caa2ed6d0e78370d221c40c37f2efbbf20fe3be7310d51ec49c0397c482ce2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
