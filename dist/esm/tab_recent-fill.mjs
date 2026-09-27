export const name="tab_recent-fill";
export const id="dl_2a7136388c316ce3735b";
export const url=new URL("../icons/tab_recent-fill.svg?v=315b80b7fd490554af45adb99ae35bb6edb5ea71c10e37464ae2e07938c39c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
