export const name="smb_share";
export const id="dl_9d8ca80fc20b4b279541";
export const url=new URL("../icons/S/smb_share.svg?v=0ad03c8ee82c09faddf0e3f4f06ff9c8c356512bdee1eccd4c2adc58daa6453a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
