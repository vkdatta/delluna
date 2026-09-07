export const name="cursor-thin";
export const id="dl_c834cd169b104be99595";
export const url=new URL("../icons/cursor-thin.svg?v=6de1ccd5216dbe100e83d7ce581c24a45c2470e182ac3a5ee0feae8a5a374804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
