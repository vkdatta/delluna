export const name="book_5-fill";
export const id="dl_156e5d46af474b23be45";
export const url=new URL("../icons/B/book_5-fill.svg?v=c04352efa26f9d300b706b602939b785eaed0a0998c67e7a15124495fe49fa44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
