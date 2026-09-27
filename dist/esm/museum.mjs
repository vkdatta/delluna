export const name="museum";
export const id="dl_60354d72524775caf323";
export const url=new URL("../icons/museum.svg?v=c478c929aedc366925ec926fd21dfc03db23dfba2b043d7ecceca66212066891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
