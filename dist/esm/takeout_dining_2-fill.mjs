export const name="takeout_dining_2-fill";
export const id="dl_7287b9346cc476a98ce9";
export const url=new URL("../icons/takeout_dining_2-fill.svg?v=271bfe45eb3603c4fe357a18abc31281325416fa16880be038d5c1fd5ae50800",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
