export const name="lucid_2-database-plus";
export const id="dl_fd775598c0fd46d59ed7";
export const url=new URL("../icons/lucid_2-database-plus.svg?v=4de540b608d2c61f12515958ab57fd3003f8ad5e5047514e502889aaa66d6b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
