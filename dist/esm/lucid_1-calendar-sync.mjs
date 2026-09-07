export const name="lucid_1-calendar-sync";
export const id="dl_b7b80099476c4505a0ee";
export const url=new URL("../icons/lucid_1-calendar-sync.svg?v=0fbeb2fa6c40f7df81519a8bc4b4f0712acaed5b44f1194e0a1303734738a875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
