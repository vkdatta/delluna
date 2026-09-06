export const name="funnel-bold";
export const id="dl_ae96a5e1ba3a46d9b180";
export const url=new URL("../icons/funnel-bold.svg?v=122a795ba42839596d1c4d439e32f5ac979fadf356c00a4259976820b598c725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
