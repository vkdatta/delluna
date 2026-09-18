export const name="candle-fill";
export const id="dl_f7e6a675efdc4e838726";
export const url=new URL("../icons/candle-fill.svg?v=2bd347f0836951e036fa35acfd6fa4a7dcfd5f362a2e309e65236d55f8c04e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
