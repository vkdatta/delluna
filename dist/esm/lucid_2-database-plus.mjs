export const name="lucid_2-database-plus";
export const id="dl_fd775598c0fd46d59ed7";
export const url=new URL("../icons/lucid_2-database-plus.svg?v=0a0f9ca875dd81e3e9e9e7360f9cfdaea5f6dd4db0bcc2a60f7ac74ba1f6ab22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
