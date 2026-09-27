export const name="navigation-arrow-fill";
export const id="dl_ca4d441d513c47e9b4a2";
export const url=new URL("../icons/navigation-arrow-fill.svg?v=b480ede8f1de5ee1346ea1023c2014c5d5eac6033c4974e1f318ec1534582b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
