export const name="sticky_note";
export const id="dl_5aef3a5bc3ef25936b0b";
export const url=new URL("../icons/sticky_note.svg?v=c5305f88a905c2e015f20865ae64e8e52bb76ce73d75d5cd770dec442fdb9996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
