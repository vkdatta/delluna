export const name="call_received-fill";
export const id="dl_aab3a2719b1fe19886c6";
export const url=new URL("../icons/call_received-fill.svg?v=7754d31cc5d9b64d1ed3749d6372650eddf6cede2fadfb206cfa8134ea6fc5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
