export const name="lucid_1-cloud";
export const id="dl_ff174bb3bd1545f28458";
export const url=new URL("../icons/lucid_1-cloud.svg?v=0ae9c3a0ce5ab15f798a3f391d250d890114ec40c9d33b52f741aa872f728de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
