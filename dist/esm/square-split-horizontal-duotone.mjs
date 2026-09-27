export const name="square-split-horizontal-duotone";
export const id="dl_5a776ec288106e963c84";
export const url=new URL("../icons/square-split-horizontal-duotone.svg?v=47695d6438024bbe8b4975bbd65d4084abf9055b1c47d00319db954efdf1ac8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
