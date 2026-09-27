export const name="lucid_2-database-zap";
export const id="dl_ff944eb99d1e4efca2c6";
export const url=new URL("../icons/lucid_2-database-zap.svg?v=8eaa26bc9ba3fdde4226262d1218f77716f4fd5341c9c05abc6bfb9f541a45d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
