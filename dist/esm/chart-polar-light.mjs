export const name="chart-polar-light";
export const id="dl_af661b5becf74245a6c0";
export const url=new URL("../icons/chart-polar-light.svg?v=6aeef6e8ba58eb74175fa8f832bb2e4e150b38f92157de8bc7e1bf0bf1a0305a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
