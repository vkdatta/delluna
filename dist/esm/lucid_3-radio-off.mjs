export const name="lucid_3-radio-off";
export const id="dl_51f5fef8b0d34411b026";
export const url=new URL("../icons/lucid_3-radio-off.svg?v=5342a0e7e41f460d1f155bb5b2f78814e98a3876d7b3513b809058e360a5a81b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
