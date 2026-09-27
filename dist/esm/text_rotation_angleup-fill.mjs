export const name="text_rotation_angleup-fill";
export const id="dl_eaf5775d6128519ee311";
export const url=new URL("../icons/text_rotation_angleup-fill.svg?v=378b4ce84c19175162e63ed334cdc04b555d7db1a4ddbfd51961bcf6fa826e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
