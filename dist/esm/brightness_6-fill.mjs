export const name="brightness_6-fill";
export const id="dl_177b928a089d6f5f34a9";
export const url=new URL("../icons/brightness_6-fill.svg?v=c7159f1edc18438b3a12dcf409a8a8de0d72249a7c98aa022cd140ea1fafaa45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
