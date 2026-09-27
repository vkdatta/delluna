export const name="radical-fill";
export const id="dl_5f5110cafb524da191d1";
export const url=new URL("../icons/radical-fill.svg?v=c23d23461a051f2a6a701f7a6279f2eab1e90d076c0adc1278f0d1b951679279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
