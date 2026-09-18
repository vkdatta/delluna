export const name="share_windows-fill";
export const id="dl_9cfe2f777ea448d7b938";
export const url=new URL("../icons/S/share_windows-fill.svg?v=086a8f1eac13786971a20bbd6f9d682d5aba89844c32671ff1d8aa44f69a42f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
