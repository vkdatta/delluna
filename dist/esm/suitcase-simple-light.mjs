export const name="suitcase-simple-light";
export const id="dl_da8dc42c5f8fc7f15621";
export const url=new URL("../icons/suitcase-simple-light.svg?v=18e0d68ecd1e6e6db530ca9385ef1538ae9ac34a1ffbdc60ee203718b97d9c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
