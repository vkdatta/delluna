export const name="signal_cellular_off";
export const id="dl_c1de915cdb94f2fe8daf";
export const url=new URL("../icons/signal_cellular_off.svg?v=8b466f700c799cd26f76914230be6ee9a2c9179883bf8cf59ad70fc480577956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
