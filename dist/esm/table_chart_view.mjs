export const name="table_chart_view";
export const id="dl_7000823e06674f15a8b0";
export const url=new URL("../icons/table_chart_view.svg?v=b181bdf7216726ea3777627efb332e9b68c98c5e7c2a4e49d8527fa721bf92d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
