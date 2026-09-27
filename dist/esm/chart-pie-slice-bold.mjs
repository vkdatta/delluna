export const name="chart-pie-slice-bold";
export const id="dl_71b0565f006e43998a95";
export const url=new URL("../icons/chart-pie-slice-bold.svg?v=fc724c436a1ab40f7d1bb85cef5318801a0324e18c50f72fa999e1ab1aa5a22a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
