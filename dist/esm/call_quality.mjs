export const name="call_quality";
export const id="dl_3cac85a71114cb98fe80";
export const url=new URL("../icons/call_quality.svg?v=e49d5115f8775c1236687d6732db2abe26688068459de349860ec12108772081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
