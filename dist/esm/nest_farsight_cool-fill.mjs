export const name="nest_farsight_cool-fill";
export const id="dl_1bad34aed1394e2ca494";
export const url=new URL("../icons/N/nest_farsight_cool-fill.svg?v=655f6dd822d043511c66b8981cf96e5f7376b55fc0435c525683120c2307a82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
