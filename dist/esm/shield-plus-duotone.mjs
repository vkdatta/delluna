export const name="shield-plus-duotone";
export const id="dl_cda1f17b9b5c697ae459";
export const url=new URL("../icons/shield-plus-duotone.svg?v=c2e9e57a47c15c29f50922c34a5377481ec846749a346a50f28c6ad2d5e2e676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
