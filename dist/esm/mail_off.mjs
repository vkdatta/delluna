export const name="mail_off";
export const id="dl_fcd4dde1060d478fb5f8";
export const url=new URL("../icons/M/mail_off.svg?v=d290f970d3e53c538d17a373da92a72db059030f2a6e12eeb750b4245b156f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
