export const name="step";
export const id="dl_8f6c0da877014fa98490";
export const url=new URL("../icons/step.svg?v=c2c09fa0c2c65dea8791e0161904a3f4b968d71b4ebaeb5d8671ac9bcec1c941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
