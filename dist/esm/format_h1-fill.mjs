export const name="format_h1-fill";
export const id="dl_ec65ab206a15dda99e74";
export const url=new URL("../icons/format_h1-fill.svg?v=91b8a0edac05ebec5eb74f3b89a717a439363e8317a81947979f2a26f20813ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
