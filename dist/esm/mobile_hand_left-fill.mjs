export const name="mobile_hand_left-fill";
export const id="dl_81123a846f6b71b7c8d3";
export const url=new URL("../icons/mobile_hand_left-fill.svg?v=ebda6d3a9d54bab02041aca25b3859367c6777d4baec7f68005f53527f4597e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
