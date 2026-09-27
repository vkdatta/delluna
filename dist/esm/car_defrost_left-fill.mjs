export const name="car_defrost_left-fill";
export const id="dl_a061ced8c71dd1e3b909";
export const url=new URL("../icons/car_defrost_left-fill.svg?v=10e600e8e493cdeb64170df5d538f31e42006a47d6c65e25a9fda42eaae2e89c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
