export const name="extension_off";
export const id="dl_28625f8c722896f1c5ae";
export const url=new URL("../icons/extension_off.svg?v=a95200a9f551274ca96d0f26d330407ecc6f37c6f2fa918d7f1ab9b2c29534ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
