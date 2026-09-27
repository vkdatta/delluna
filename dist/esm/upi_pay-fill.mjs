export const name="upi_pay-fill";
export const id="dl_9c959b0b4d474b3b3da6";
export const url=new URL("../icons/upi_pay-fill.svg?v=6772454d821ad7786b61b859af211318dce2c04958a9403fd8d6ea5275017c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
