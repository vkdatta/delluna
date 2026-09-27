export const name="flag-banner-duotone";
export const id="dl_4ad1997974cf4456bcbd";
export const url=new URL("../icons/flag-banner-duotone.svg?v=e45fc48bde59a602bb2a7a6ff37671449552a81f06ac6ca5488fcebf6d21e443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
