export const name="lucid_3-panel-top";
export const id="dl_2357a325cccd4961b27b";
export const url=new URL("../icons/lucid_3-panel-top.svg?v=7acb584ca3984e9a66163abb472d2f451a0ed1dacb28f116c51d181ca652a770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
