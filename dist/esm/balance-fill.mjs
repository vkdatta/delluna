export const name="balance-fill";
export const id="dl_79aeb2aada45515f294e";
export const url=new URL("../icons/balance-fill.svg?v=bf0655b7e7197e46c33bdf9d70751b00a2eba4a87cc8e524d7f4636272c9b5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
