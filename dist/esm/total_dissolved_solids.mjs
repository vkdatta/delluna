export const name="total_dissolved_solids";
export const id="dl_2276efc35628f4266ac9";
export const url=new URL("../icons/total_dissolved_solids.svg?v=c21d0a22b14ffaa7dc75d80642d368299408dbd24dd2553fdadfb9c411c7074d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
