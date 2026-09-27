export const name="inbox";
export const id="dl_c4f300074a86bdd32b68";
export const url=new URL("../icons/inbox.svg?v=4e89d5135385bdc77659b6cd4cf146c084388af38914f7b042467198aa8d5d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
