export const name="upi_pay";
export const id="dl_79ef3ab0e7ae54cd10e6";
export const url=new URL("../icons/upi_pay.svg?v=576d3f28d56a7e492e82e9c1681493412c5df3c4633bc615ac5b3946591d757a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
