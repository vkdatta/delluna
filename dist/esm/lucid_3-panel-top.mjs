export const name="lucid_3-panel-top";
export const id="dl_2357a325cccd4961b27b";
export const url=new URL("../icons/lucid_3-panel-top.svg?v=dfcb12f84841fbd9850827faea1ea88959642e65f2a521c2ca04bc5c883a3de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
