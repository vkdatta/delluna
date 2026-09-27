export const name="desktop_windows-fill";
export const id="dl_e0563dda933b6517a9cc";
export const url=new URL("../icons/desktop_windows-fill.svg?v=c6a9c5ce86e41dea7ccf39e5222a3b6efb4b7e65e7dc02edd42226218c44efee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
