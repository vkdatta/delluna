export const name="lucid_3-monitor";
export const id="dl_48a6215e92344d998e13";
export const url=new URL("../icons/lucid_3-monitor.svg?v=fd724a137ad2f1a1aa77444ab0d436f8954931162fda2da432d39028765604b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
