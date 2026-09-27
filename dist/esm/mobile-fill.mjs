export const name="mobile-fill";
export const id="dl_012e15902a5c3a468449";
export const url=new URL("../icons/mobile-fill.svg?v=cf8aa411f1afa3e921afdb9c03eef11541850a03044f4443058d764997417bca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
