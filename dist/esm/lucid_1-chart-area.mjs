export const name="lucid_1-chart-area";
export const id="dl_438d9679f3ef43ffa61a";
export const url=new URL("../icons/lucid_1-chart-area.svg?v=46b8ba8be4450bd8a2335332601d5db1008a79faf7d59dd9b4a91fe3cf919b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
