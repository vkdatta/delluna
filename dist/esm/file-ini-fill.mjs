export const name="file-ini-fill";
export const id="dl_92628173f15d471ebe9f";
export const url=new URL("../icons/file-ini-fill.svg?v=8f48715d1a36f63473c25ce700165221d41e99fd3e6b2601a3c77412b8b15496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
