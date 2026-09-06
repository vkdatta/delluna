export const name="arrow-elbow-up-left";
export const id="dl_91ea48f1e1cf4ea1981c";
export const url=new URL("../icons/arrow-elbow-up-left.svg?v=75bf7967d225f67b4fc328a2621daae385a90d3993a79ece364e93c8fa557709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
