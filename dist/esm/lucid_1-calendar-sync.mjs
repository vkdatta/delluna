export const name="lucid_1-calendar-sync";
export const id="dl_b7b80099476c4505a0ee";
export const url=new URL("../icons/lucid_1-calendar-sync.svg?v=2c562bc7d327604bbb0f9ad688c79fbadffd7bb8c45ee6cbe36c14fc379cfedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
