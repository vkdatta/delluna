export const name="markunread_mailbox";
export const id="dl_efaff4f93618abc6f1d5";
export const url=new URL("../icons/markunread_mailbox.svg?v=f0cf091de6efa8eb038c98bd3155739df288bc448e2dee1c7cfccc631f31d805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
