export const name="feedback-fill";
export const id="dl_415836f1d29904d640bd";
export const url=new URL("../icons/feedback-fill.svg?v=23312d5c7529f6cb59ce892003e76912a6bd29d7c36d7dabca9fe321fa79a8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
