export const name="sports_kabaddi";
export const id="dl_ba16f1a985f998674472";
export const url=new URL("../icons/sports_kabaddi.svg?v=96b56980c16d0b687ff7a8f1f958f5461ce4537457120c6b14ae07901b6df928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
