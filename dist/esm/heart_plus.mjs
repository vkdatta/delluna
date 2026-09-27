export const name="heart_plus";
export const id="dl_fca98cf0f4ac86658277";
export const url=new URL("../icons/heart_plus.svg?v=3f95ce9d81843e611f585b10690d3973c911b1af7010fee350083558a74d0153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
