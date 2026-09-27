export const name="5g_mobiledata_badge";
export const id="dl_ebc4f269ead81444c621";
export const url=new URL("../icons/5g_mobiledata_badge.svg?v=e4dfd0cca418799b7263b779ba49bd1cc6ee01960b647f629d4c39b89d9bf1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
