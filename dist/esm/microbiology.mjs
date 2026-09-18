export const name="microbiology";
export const id="dl_9e6ccd31e3124721817e";
export const url=new URL("../icons/microbiology.svg?v=04a67c108ca0a66687fdce3a3956b1d29b998a78f5898c85610634f27eb20a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
