export const name="flutter_dash-fill";
export const id="dl_d79579954a4ef746e115";
export const url=new URL("../icons/flutter_dash-fill.svg?v=c2e625ab653d3023edbd68b3c471df4a96e9038ffaaedb35b6ea3925e6b62b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
