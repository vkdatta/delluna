export const name="vpn_key_alert";
export const id="dl_1177617bfd7fdd7e45e1";
export const url=new URL("../icons/vpn_key_alert.svg?v=11c323d16e729c00856dd872fa86a7201bedf9a0d97fbe723d263f9caee30228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
