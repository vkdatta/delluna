export const name="bubble_chart-fill";
export const id="dl_0315298cc5faa44c8f89";
export const url=new URL("../icons/bubble_chart-fill.svg?v=dc86a53c0368ccb48c4650fb18f92a8da327217f117342c84f495c65b8b46fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
