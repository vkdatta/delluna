export const name="clarify-fill";
export const id="dl_193b4ab58e195abd0c4b";
export const url=new URL("../icons/clarify-fill.svg?v=ea3da450f2f0335aa542b5d3faadf5bf65c03db7fa7a2ab5fbacae50e0cdf8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
