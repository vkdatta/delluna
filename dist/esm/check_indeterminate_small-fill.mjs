export const name="check_indeterminate_small-fill";
export const id="dl_92572a57868c12686fe8";
export const url=new URL("../icons/check_indeterminate_small-fill.svg?v=4c6067622729b08a26163b88a22d89fa4d3d2e22fcf641113160711fef7a6b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
