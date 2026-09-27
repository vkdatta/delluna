export const name="mail_asterisk-fill";
export const id="dl_82be42f7c3d8c0381b51";
export const url=new URL("../icons/mail_asterisk-fill.svg?v=0cd62b4bbb8de3b3290f25a71ca37154406f6fe25680381db102aa5928430034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
