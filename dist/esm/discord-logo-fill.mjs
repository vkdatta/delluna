export const name="discord-logo-fill";
export const id="dl_afe2623dfab14955bc5d";
export const url=new URL("../icons/discord-logo-fill.svg?v=cbc54d2722cadd94ebaf1916ed754509236f92927d978123a047531c65c92b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
