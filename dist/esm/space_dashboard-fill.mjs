export const name="space_dashboard-fill";
export const id="dl_0253b5cfeb36c0d5815f";
export const url=new URL("../icons/space_dashboard-fill.svg?v=69f40cd551d3f40c4beb6d80455fa26184a830c942d3388f1d9b4f58968696bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
