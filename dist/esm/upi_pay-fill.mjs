export const name="upi_pay-fill";
export const id="dl_b605e718068043f582a9";
export const url=new URL("../icons/U/upi_pay-fill.svg?v=272e953dd9fcf573fe89bb55b44bc9245e1617e6feaf79f5a5e0f72e8534353c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
