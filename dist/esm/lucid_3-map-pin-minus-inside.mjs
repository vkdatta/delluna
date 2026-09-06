export const name="lucid_3-map-pin-minus-inside";
export const id="dl_f9b9c1c0cefc429d8f39";
export const url=new URL("../icons/lucid_3-map-pin-minus-inside.svg?v=b049531e14efdbb6eb357abe4870dac32342b97b959532f913f046487c96cc25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
