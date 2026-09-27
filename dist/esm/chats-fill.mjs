export const name="chats-fill";
export const id="dl_83b4c60fe20f471dadef";
export const url=new URL("../icons/chats-fill.svg?v=7f7262b95db693221c9118e1d67a015e5607d3803ea69ef9a059b907011916d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
