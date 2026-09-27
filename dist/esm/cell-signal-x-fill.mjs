export const name="cell-signal-x-fill";
export const id="dl_2a624254ec794b5c83fb";
export const url=new URL("../icons/cell-signal-x-fill.svg?v=7f45c6884a57b834e83b9aafb0758de805f4b372ed8cbe310c38b6ff14ee19d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
