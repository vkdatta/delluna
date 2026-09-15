export const name="calendar_add_on-fill";
export const id="dl_fbd4a8b0bcb344d0b4ca";
export const url=new URL("../icons/C/calendar_add_on-fill.svg?v=1bbcbe75584019437ab7e0cc9edb5ced664b05126ffd6c5b5ba10b5ee0aa973c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
