export const name="notebook-thin";
export const id="dl_acac62fe5c1747a9b2f9";
export const url=new URL("../icons/notebook-thin.svg?v=439f8dac5a94498e93203ec6a9743a53ce5575831236cc213c03613c4f846289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
