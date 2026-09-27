export const name="calendar_check-fill";
export const id="dl_eac354f7f11af48f391c";
export const url=new URL("../icons/calendar_check-fill.svg?v=5409f8d4d877d4b5a89bd2106542ac4cb9ed57b54ad30b49c5ebb35aedac0280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
