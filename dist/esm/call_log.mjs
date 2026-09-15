export const name="call_log";
export const id="dl_84856cf4c57a4b2bb20c";
export const url=new URL("../icons/C/call_log.svg?v=0236140b08516b64ec4cfa39883a797064d57765fa2c01d45cd79dcedd4a7e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
