export const name="ward-fill";
export const id="dl_cfa01b138cdacf685d92";
export const url=new URL("../icons/ward-fill.svg?v=5494d8ec67faf93ea0a5eb5bc21f02838ddaf4850ec8de70d6a24cdc6c87d72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
