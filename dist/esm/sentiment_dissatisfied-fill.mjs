export const name="sentiment_dissatisfied-fill";
export const id="dl_287c18b4708948d80416";
export const url=new URL("../icons/sentiment_dissatisfied-fill.svg?v=2d218e351cfb9792c9cd0dfc9773fac726682d6d7a91822b689edbe5633e78b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
