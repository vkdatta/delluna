export const name="users";
export const id="dl_37deeced7b6b445f95df";
export const url=new URL("../icons/users.svg?v=d216a68550e6db766b9b4b8cf319348aeaab678dd4839a9f55888bab61731dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
