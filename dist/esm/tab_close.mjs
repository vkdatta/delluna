export const name="tab_close";
export const id="dl_4778a9b2bc3e2ab86072";
export const url=new URL("../icons/tab_close.svg?v=2550c5a97e7deb7e00b1ee1c1ee536ae6a8d26cd890b774aa1f5178a3e03fdaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
