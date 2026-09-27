export const name="upi_pay-fill";
export const id="dl_5e66852d9a94241f97b4";
export const url=new URL("../icons/upi_pay-fill.svg?v=5978364daedca2bc730f5101d292d91238917f6a03090f98c33e58156d979164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
