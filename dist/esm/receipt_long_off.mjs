export const name="receipt_long_off";
export const id="dl_ff57fb52297d406497a5";
export const url=new URL("../icons/receipt_long_off.svg?v=440b77ba4f370f4f94c85b74b23b3437843ae111d9dea0692dbc545df07617be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
