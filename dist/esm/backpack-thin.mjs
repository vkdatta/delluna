export const name="backpack-thin";
export const id="dl_5dfb3f934d7d4433abab";
export const url=new URL("../icons/backpack-thin.svg?v=74acc2618dddaddfe76a721305abf853252ccf1d8fc962cb9dd699eabb3d4537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
