export const name="attach_email-fill";
export const id="dl_c723f7db3beacb169f07";
export const url=new URL("../icons/attach_email-fill.svg?v=c66742a1cdb84af0cdd35a57c1dbd6dbfeba80e42075c1c5ee864be72957dd68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
