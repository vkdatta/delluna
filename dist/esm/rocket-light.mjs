export const name="rocket-light";
export const id="dl_c860263b968343b18cfc";
export const url=new URL("../icons/rocket-light.svg?v=ac45574f91e992048d6ae89bf37e21fae5b7231558455f20a8832f198e401f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
