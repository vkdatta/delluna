export const name="network_cell-fill";
export const id="dl_f435d3c8fb4a55d3ad67";
export const url=new URL("../icons/network_cell-fill.svg?v=727f2e17602f3fecddf95a9cc2c90a389fbe162d0bcfb36ca4fb61b7ec8d32f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
