export const name="e911_avatar";
export const id="dl_a15eea3e476241fbbdd8";
export const url=new URL("../icons/e911_avatar.svg?v=e0bd4f6b1292c87f93673f283a52b7ef8d964dc457a92155ebd7237564ccfdee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
