export const name="map_pin_review-fill";
export const id="dl_4887fdfdc641d37864a4";
export const url=new URL("../icons/map_pin_review-fill.svg?v=492251aa5af2e38cf3a31c2c0de72e1ae230eda0d6165e155e56fd6024252d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
