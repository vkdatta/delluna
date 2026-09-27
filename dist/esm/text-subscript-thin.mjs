export const name="text-subscript-thin";
export const id="dl_bfa091b0c2511590446b";
export const url=new URL("../icons/text-subscript-thin.svg?v=ec973b1346f3fbd26381824d6dac06ef578a3612f39cb1d62e234f642633a9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
