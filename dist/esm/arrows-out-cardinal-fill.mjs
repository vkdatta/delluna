export const name="arrows-out-cardinal-fill";
export const id="dl_0b6f2e8d5bd44ba39064";
export const url=new URL("../icons/arrows-out-cardinal-fill.svg?v=dcb70f001bda85e54b5d28055d8c9eca9114205ff074fe2fa3b7a3507cdb5b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
