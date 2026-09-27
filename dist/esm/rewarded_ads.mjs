export const name="rewarded_ads";
export const id="dl_9f987c72ac93b298d45d";
export const url=new URL("../icons/rewarded_ads.svg?v=0669fde1619672df33bf92f79f129e349a951279a68cb600220394186d862dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
