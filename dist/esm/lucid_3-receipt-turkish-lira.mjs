export const name="lucid_3-receipt-turkish-lira";
export const id="dl_722d9edd1c184ee2acc0";
export const url=new URL("../icons/lucid_3-receipt-turkish-lira.svg?v=44c10551b4be211c2eedf75fd276238b123f140001046bbfb2e5053bca2298e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
