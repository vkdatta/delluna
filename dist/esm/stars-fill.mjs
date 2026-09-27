export const name="stars-fill";
export const id="dl_6aa0a40d62aff518b1ba";
export const url=new URL("../icons/stars-fill.svg?v=0f3ceb819a4d6bfc1d380cea94005a421c8a208cf6b3e03b486488eea524de38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
