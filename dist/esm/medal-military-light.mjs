export const name="medal-military-light";
export const id="dl_2163b1fd6cb645ff8e59";
export const url=new URL("../icons/medal-military-light.svg?v=4fd034b79c7b0adc2661cb06a9fd8e7e83041bf31c410ffe1d16b2b635f223cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
