export const name="lucid_3-message-square-share";
export const id="dl_bddfa3d0991041adba88";
export const url=new URL("../icons/lucid_3-message-square-share.svg?v=8a9f980c56bf526c735d80ab784db2b7331b7a2a5ec4edea87012387cf4efc34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
