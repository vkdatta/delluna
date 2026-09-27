export const name="lucid_2-cup-soda";
export const id="dl_94f606495a0c448e9430";
export const url=new URL("../icons/lucid_2-cup-soda.svg?v=827101d8ca21bdbdc9edc2cdc309df89e3b1b626f36c516be76708838f9611be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
