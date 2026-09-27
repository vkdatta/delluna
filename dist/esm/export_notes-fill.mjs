export const name="export_notes-fill";
export const id="dl_ac91998b94c876ad92b1";
export const url=new URL("../icons/export_notes-fill.svg?v=923b5b09ec4d66223abccb7dde4366a1907db174f3fee98fb66e094cdd86ac66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
