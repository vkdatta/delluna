export const name="watch_alert";
export const id="dl_72961f8a3bf4c124f819";
export const url=new URL("../icons/watch_alert.svg?v=2c57b5fccc8857685abfe12981785c0aa0fb00495d6e319ad079806216193d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
