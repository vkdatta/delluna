export const name="martini-bold";
export const id="dl_d239e2411f3645fc80be";
export const url=new URL("../icons/martini-bold.svg?v=806b8a3635d68fbfc5c2b9a91b66f18a6f1bd3091f6323712b436ab49c8b9b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
