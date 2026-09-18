export const name="blinds_2_closed";
export const id="dl_edfd36162be248a0b2dc";
export const url=new URL("../icons/blinds_2_closed.svg?v=ac5429c4e541523130c7196ec15bbedbadacbc37814036e717027e4b184a25b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
