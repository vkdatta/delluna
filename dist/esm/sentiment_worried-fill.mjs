export const name="sentiment_worried-fill";
export const id="dl_cc2234608b2bd5f89148";
export const url=new URL("../icons/sentiment_worried-fill.svg?v=c1d88465fe7e4554e79d936ebdb047b7ff5f6eb017f94b78d9134206efcd023a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
