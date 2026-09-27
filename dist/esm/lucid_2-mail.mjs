export const name="lucid_2-mail";
export const id="dl_4c21df6293a441d2bdae";
export const url=new URL("../icons/lucid_2-mail.svg?v=a65b58f792761334a6165acac1c3a86a3e49254d29ed3dfe525e38dd23976d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
