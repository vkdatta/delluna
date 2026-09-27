export const name="lucid_3-message-square-quote";
export const id="dl_8a5eda9b0ccf45feb4db";
export const url=new URL("../icons/lucid_3-message-square-quote.svg?v=3fc5049d468007ee8306ab3b93793956d23f4974a71f418a7895340c7a0e14fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
