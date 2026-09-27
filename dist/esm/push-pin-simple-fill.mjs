export const name="push-pin-simple-fill";
export const id="dl_2e11742160bc4264ac1b";
export const url=new URL("../icons/push-pin-simple-fill.svg?v=8571bbd254018c1800dab22f2dd820eb95488cd1ba2a318bfdcbd7afb17bf8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
