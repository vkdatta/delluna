export const name="chat-circle-fill";
export const id="dl_aca85f8cac2440b0bf0a";
export const url=new URL("../icons/chat-circle-fill.svg?v=56fe420c0baef36e059c27c99a0cb03463ae43854b130fdcb58052df968ed10f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
