export const name="aq";
export const id="dl_40b1585f9d4fd77ff414";
export const url=new URL("../icons/aq.svg?v=5da9b27402e706d919a9557090079fc6701698e2627377f91f02b7f4b9caac4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
