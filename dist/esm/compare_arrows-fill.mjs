export const name="compare_arrows-fill";
export const id="dl_feb5b602327e2f828a35";
export const url=new URL("../icons/compare_arrows-fill.svg?v=ebdd12a6b99effd3f2bb689efa1d668af1a804c7c7e38937f732779d4758efdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
