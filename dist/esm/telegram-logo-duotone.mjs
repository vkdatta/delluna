export const name="telegram-logo-duotone";
export const id="dl_ac70af205534f2dd0f78";
export const url=new URL("../icons/telegram-logo-duotone.svg?v=dc27de38d746c00eedb8b3fceab5e9c478fb817721b8b6559e6128ebaf1a7a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
