export const name="approval_delegation-fill";
export const id="dl_57548591263b6395f197";
export const url=new URL("../icons/approval_delegation-fill.svg?v=c9f520af1bebfcccfd634decda3fab15ad8c94228a3516df164eb2edfe8f7e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
