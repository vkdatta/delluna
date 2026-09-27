export const name="images-duotone";
export const id="dl_c2019d11c7ab429e9976";
export const url=new URL("../icons/images-duotone.svg?v=b04fbf59a57da07f76f79753273f9cb95a823965ec6e0544e3d4ecbc953a5495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
