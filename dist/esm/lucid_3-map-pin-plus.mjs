export const name="lucid_3-map-pin-plus";
export const id="dl_7b61de1038c547e599b3";
export const url=new URL("../icons/lucid_3-map-pin-plus.svg?v=6740869107d9cc1e951d2a6114df49076b9bcdcc11d166632ceaed35355e4e55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
