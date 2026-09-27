export const name="chart-donut-light";
export const id="dl_966c086572a34837a08b";
export const url=new URL("../icons/chart-donut-light.svg?v=98a0d2070639cc8a8fa02a12839e80272aea02029f3143abb245f98787b1a9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
