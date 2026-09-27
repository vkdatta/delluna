export const name="back-dismiss";
export const id="dl_af09f5de5d3c65302296";
export const url=new URL("../icons/back-dismiss.svg?v=9e98595bec94367af0d47cef1ed49c215d6ca90aadc5cb152fe8acb02969b60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
