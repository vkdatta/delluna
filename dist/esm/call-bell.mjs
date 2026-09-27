export const name="call-bell";
export const id="dl_9f820a7f57044933b51f";
export const url=new URL("../icons/call-bell.svg?v=d8b2022f6fe4e12d8b5072f341aa39c198fb1a376dcdeb60b9a1b73c337fa98a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
