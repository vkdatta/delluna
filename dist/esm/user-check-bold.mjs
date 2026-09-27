export const name="user-check-bold";
export const id="dl_bd285d6afb30f6df61b4";
export const url=new URL("../icons/user-check-bold.svg?v=8de03cf56c0b31433470996696076b06f80088918617941c77ab98c511b48373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
