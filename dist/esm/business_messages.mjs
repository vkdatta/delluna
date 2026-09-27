export const name="business_messages";
export const id="dl_2ec927617f305470d2f9";
export const url=new URL("../icons/business_messages.svg?v=5fb9e64f74cd0cb94f551de3f975a51eb5584f175f0449724a25a8e857051a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
