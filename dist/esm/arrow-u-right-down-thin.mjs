export const name="arrow-u-right-down-thin";
export const id="dl_5fd39a7cf73c4f68a01b";
export const url=new URL("../icons/arrow-u-right-down-thin.svg?v=0c812eca81702e8fc72dcca5e84e81f77a21964309f7975bb02c8a07203af0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
