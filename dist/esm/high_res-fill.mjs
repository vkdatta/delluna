export const name="high_res-fill";
export const id="dl_75ec73410f913861a399";
export const url=new URL("../icons/high_res-fill.svg?v=dcc6a92ee30a015b36e06b22ccfb202f133562b69f11442302d2bb734fbfb995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
