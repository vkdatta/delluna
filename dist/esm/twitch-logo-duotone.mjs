export const name="twitch-logo-duotone";
export const id="dl_34fa423bedf36942477e";
export const url=new URL("../icons/twitch-logo-duotone.svg?v=75c9b8051470f1f0e84e4c6d1ec9753b70d8cfc3b8e4ea35f8269ff39b03c957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
