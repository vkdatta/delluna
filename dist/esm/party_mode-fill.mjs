export const name="party_mode-fill";
export const id="dl_e8e429d7c8c3bb644db1";
export const url=new URL("../icons/party_mode-fill.svg?v=69e4847ae1516cedf6387fccb38d39945b330cf53c870126422675520ef8e57f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
