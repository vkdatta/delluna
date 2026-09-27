export const name="car_defrost_low_right-fill";
export const id="dl_c17fbfbc69aa51f6f5d9";
export const url=new URL("../icons/car_defrost_low_right-fill.svg?v=c60e660d8adf86738f925636c1fcd855134369aa6e6b064d60d51bd31dd52e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
