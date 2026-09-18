export const name="hearing_aid-fill";
export const id="dl_9635dfbeb7f14b2f8082";
export const url=new URL("../icons/H/hearing_aid-fill.svg?v=f47fbde36cdd17fe099a5b872ac105f2584ea1a7dd1f25e3c9405d164cd05945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
