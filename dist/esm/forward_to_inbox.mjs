export const name="forward_to_inbox";
export const id="dl_8b44318116c11ca3d91f";
export const url=new URL("../icons/forward_to_inbox.svg?v=69563785dcbfcfc3bb6a127cba6ad1f054a3b961334f34e511cb9be753b6a60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
