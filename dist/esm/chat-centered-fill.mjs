export const name="chat-centered-fill";
export const id="dl_e5e9e023997a47d28964";
export const url=new URL("../icons/chat-centered-fill.svg?v=96a9b2ba4b0af097f082f205d86d872fb695f48c0f6ff9f7e949b88159182e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
