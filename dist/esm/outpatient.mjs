export const name="outpatient";
export const id="dl_a452211c56c36e0cfdf4";
export const url=new URL("../icons/outpatient.svg?v=c02db4c75bd66005d670e53abe19e7bd818edf4b664443e9eee214133f2f0a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
