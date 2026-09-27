export const name="battery_error-fill";
export const id="dl_9d7141ae74b2d6c83726";
export const url=new URL("../icons/battery_error-fill.svg?v=d055bb41962ba087c35662bca60c91057a7a648f5cd09dc7717d78bcd2b0a24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
