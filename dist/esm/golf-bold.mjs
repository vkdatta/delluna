export const name="golf-bold";
export const id="dl_d7cc239b9207442ca891";
export const url=new URL("../icons/golf-bold.svg?v=fe73c533606f6fe9df346e8f4c1b49157c6a1912519f896c9321269870e37a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
