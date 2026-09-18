export const name="database_off-fill";
export const id="dl_82372f345cbe42839fb4";
export const url=new URL("../icons/database_off-fill.svg?v=e85115723a230587f0c26b3b49aedd91544e1d8deaa47b8cc80dfbb0d2a0b1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
