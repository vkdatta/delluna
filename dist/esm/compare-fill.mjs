export const name="compare-fill";
export const id="dl_6dd801cc10609ad53509";
export const url=new URL("../icons/compare-fill.svg?v=06b304cdf2f12fa9dd3da1589a8255bc8fb37cd7b041e869d1e320fbe0dc2296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
