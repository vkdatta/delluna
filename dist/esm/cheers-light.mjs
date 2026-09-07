export const name="cheers-light";
export const id="dl_7dc4e18d90a0496b8389";
export const url=new URL("../icons/cheers-light.svg?v=875aa75bbbd1b9c3bdee864b625eea8d88d1b9e38702409630b359b2eb9143c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
