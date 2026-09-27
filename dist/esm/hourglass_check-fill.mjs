export const name="hourglass_check-fill";
export const id="dl_cfc30a6d2a9581d33584";
export const url=new URL("../icons/hourglass_check-fill.svg?v=bc06a2de3560f0aa5c53794a0a2a62eea564e2fe8da24bccacb2eafacdda35b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
