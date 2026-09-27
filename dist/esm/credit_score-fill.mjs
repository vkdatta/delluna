export const name="credit_score-fill";
export const id="dl_c04fec5c53aee074668b";
export const url=new URL("../icons/credit_score-fill.svg?v=848b5dc4914673122c52f3e442d4e3fb95a707b3b6d004a4b3dd5f9dee182abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
