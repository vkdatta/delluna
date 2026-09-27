export const name="bluetooth-thin";
export const id="dl_4f78819d8cdd4458a429";
export const url=new URL("../icons/bluetooth-thin.svg?v=0a81e36d89f346c87856228e1252b42dfcd153e779d2dd9b3629430405ee2ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
