export const name="cancel_schedule_send-fill";
export const id="dl_8f70cd77444094a22d00";
export const url=new URL("../icons/cancel_schedule_send-fill.svg?v=cbbfc712773f96184feedca3a4affb677faf72f5fbe10079baedcefa6f200c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
