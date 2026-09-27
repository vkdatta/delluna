export const name="selection-background-bold";
export const id="dl_8a8c4e511923717aff8b";
export const url=new URL("../icons/selection-background-bold.svg?v=d6750ec649690cccc6dd08f9e6dbfe029d9a96b9580ac09aef99c9f543adb524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
