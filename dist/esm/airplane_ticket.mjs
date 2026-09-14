export const name="airplane_ticket";
export const id="dl_23def0fc61f646e2ab89";
export const url=new URL("../icons/A/airplane_ticket.svg?v=3683b7e404dc5520a3d92dbce43450ab72ba0ae2ef4b6698b732effff8e33eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
