export const name="calendar-check-duotone";
export const id="dl_785b065a6ade40289384";
export const url=new URL("../icons/calendar-check-duotone.svg?v=6f6015c6d377ec43e61df264f1c358c74c7c4a4b32c02f8ddb83687a5fceac9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
