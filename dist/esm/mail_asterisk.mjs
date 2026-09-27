export const name="mail_asterisk";
export const id="dl_f6feac37c056c9464765";
export const url=new URL("../icons/mail_asterisk.svg?v=ce902a5277f323f5555bbbfa56fe03b57cd13f98b47b8202b52fb0b419bc6bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
