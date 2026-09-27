export const name="award_star-fill";
export const id="dl_1b8c13d939f3eb654781";
export const url=new URL("../icons/award_star-fill.svg?v=1e83eef199bd9f5db0ed0a893c718999a686f9a5655f34043d191e5854b352b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
