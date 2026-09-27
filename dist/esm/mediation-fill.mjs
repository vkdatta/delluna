export const name="mediation-fill";
export const id="dl_0cb318afee72a74480e3";
export const url=new URL("../icons/mediation-fill.svg?v=d3c2edf002ada7f84ae202f78ca6d43a807404486978d506426ca200c76902e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
