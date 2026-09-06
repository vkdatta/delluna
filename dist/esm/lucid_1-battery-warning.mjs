export const name="lucid_1-battery-warning";
export const id="dl_d015667e51d74fe5ad98";
export const url=new URL("../icons/lucid_1-battery-warning.svg?v=82f6ecf6c783378c3f6e0ead325c32dcfc6f3989b9ffede0a332d3e346f89207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
