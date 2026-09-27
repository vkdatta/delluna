export const name="desktop_windows-fill";
export const id="dl_dd1caf8a093ac6f7c85b";
export const url=new URL("../icons/desktop_windows-fill.svg?v=342ae98793fb4fab1cf855909124464558be706c93692409b94e127ec8e621b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
