export const name="copyleft-duotone";
export const id="dl_ad24d431ed1b49178cb0";
export const url=new URL("../icons/copyleft-duotone.svg?v=5259457c45a9fcfc7b6146406b28c967f87310f9de42de38c2a8ca9d9fc877de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
