export const name="lucid_2-equal";
export const id="dl_bfcc1008268c4eaeb053";
export const url=new URL("../icons/lucid_2-equal.svg?v=e7a7dbc26fb48e8091e99a57a4b188f887c326b6366ed9eb8ed77fa688260602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
