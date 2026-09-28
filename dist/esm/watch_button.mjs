export const name="watch_button";
export const id="dl_e0ce3d4a7583eb420bff";
export const url=new URL("../icons/watch_button.svg?v=72bd12f6b3b475995f90e95be71a5a651f271cbb7431ea35f4160b87a57c1a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
