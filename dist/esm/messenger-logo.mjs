export const name="messenger-logo";
export const id="dl_dfad81a8e99d45b19fad";
export const url=new URL("../icons/messenger-logo.svg?v=254906dbe1fb96f286b406138412cf8ff334e9767c42262caf0314464d5fb3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
