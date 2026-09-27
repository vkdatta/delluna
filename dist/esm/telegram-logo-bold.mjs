export const name="telegram-logo-bold";
export const id="dl_95fb80d300f63a331b91";
export const url=new URL("../icons/telegram-logo-bold.svg?v=b933ad751d68ebe5faa7eedfbb8da91c30ca2d595d085015b9e577c49cf0a6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
