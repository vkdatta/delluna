export const name="sentiment_excited";
export const id="dl_522f7001d535b5adb55c";
export const url=new URL("../icons/sentiment_excited.svg?v=ce9e145beefc5657909a04809b00513e3202926076994073fdfe8be9f2bb4f84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
