export const name="speaker-none-duotone";
export const id="dl_18f52ca7202b313fa614";
export const url=new URL("../icons/speaker-none-duotone.svg?v=bd07905fc6693b930eb1da7357d95721a9a56abda95a1dc3121d178bdbc539d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
