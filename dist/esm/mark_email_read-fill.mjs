export const name="mark_email_read-fill";
export const id="dl_3373c89b365d6292c75a";
export const url=new URL("../icons/mark_email_read-fill.svg?v=87dfbeb82a80d884c724ba60228743dd0e52ad2e1862ff4ab2ada9948cfe4e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
