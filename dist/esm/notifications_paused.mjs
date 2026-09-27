export const name="notifications_paused";
export const id="dl_235ea6ce9529b0cdb6e1";
export const url=new URL("../icons/notifications_paused.svg?v=1bcb673c5bdc79585d0934e052a2404f163485973fb976baed787e39ae67b1fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
