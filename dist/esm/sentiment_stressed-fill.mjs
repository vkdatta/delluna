export const name="sentiment_stressed-fill";
export const id="dl_4a77922d9f816b58d39d";
export const url=new URL("../icons/sentiment_stressed-fill.svg?v=b4989454ef29e8bd12a4158b23abe631e37318a6e7f63402af01a26559c6fc09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
