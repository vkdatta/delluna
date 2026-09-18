export const name="markunread_mailbox-fill";
export const id="dl_ae581dcf372c4c5e90ec";
export const url=new URL("../icons/M/markunread_mailbox-fill.svg?v=e1a9857c631c67fcbe56b69e5d92359aeb04ff9901eaf40b301dd2eb1d6d58c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
