export const name="tablet-fill";
export const id="dl_8403325d9fd0e6c63dfa";
export const url=new URL("../icons/tablet-fill.svg?v=76b533c96173157a7358d38e095339a9146d89af2090980d7fa609632e634d73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
