export const name="person_text-fill";
export const id="dl_9bb2a54682cf420ba404";
export const url=new URL("../icons/P/person_text-fill.svg?v=f89f9854c54e82285c8729aa035817b0baad0167ebf0b7b5249c095817161254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
