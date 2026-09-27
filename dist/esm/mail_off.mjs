export const name="mail_off";
export const id="dl_122d46c9d6afe30cda39";
export const url=new URL("../icons/mail_off.svg?v=775d8aa0c8245ab39bce220a2bf0445f51034fcd6444b74d55691630dd8473bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
