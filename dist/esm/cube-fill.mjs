export const name="cube-fill";
export const id="dl_96ef6690b0844e0e8432";
export const url=new URL("../icons/cube-fill.svg?v=c3af26cbbe9f87861e20b6d70b904cc0b2544e23dcebfaca2eed1b04fa9dc48b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
