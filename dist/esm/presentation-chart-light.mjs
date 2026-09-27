export const name="presentation-chart-light";
export const id="dl_effa7880a7214de79e71";
export const url=new URL("../icons/presentation-chart-light.svg?v=8b86f3741cf028856bbf1fd30c5ab06286b0d84511b01ab5695088406ce14c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
