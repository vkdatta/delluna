export const name="water_ec-fill";
export const id="dl_ba45d1b4fca64801949a";
export const url=new URL("../icons/W/water_ec-fill.svg?v=a7f5cb8feed44f982f8f2eb46e3ed77cddcd5bff4bb15ae158a8e89edaf1b64c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
