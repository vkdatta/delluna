export const name="settings_seating";
export const id="dl_6b30376121fa43bd9e17";
export const url=new URL("../icons/settings_seating.svg?v=9fc9d025f560220a811204b308b50065e69b097c9a0d978e38d62a9561226e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
