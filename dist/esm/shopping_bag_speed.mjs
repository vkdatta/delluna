export const name="shopping_bag_speed";
export const id="dl_fc56a14cfd07e54bdaa4";
export const url=new URL("../icons/shopping_bag_speed.svg?v=d502b23a43632b723a7295b37aa92d15eb187b0e9878d0f9f7e5ac60f513ee84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
