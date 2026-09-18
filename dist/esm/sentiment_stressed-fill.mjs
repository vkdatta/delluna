export const name="sentiment_stressed-fill";
export const id="dl_a99d587441db4d049e1a";
export const url=new URL("../icons/sentiment_stressed-fill.svg?v=cf940afff4335a98cbe676e89a38bfac4fefa7ee1bb0e0466215133911c70553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
