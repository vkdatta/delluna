export const name="eraser-thin";
export const id="dl_061a942803fe47078461";
export const url=new URL("../icons/eraser-thin.svg?v=1c5dbf0cbd3893619e08c289055053b777da3ae1ddc2ae0bfea5fc3fda5f5d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
