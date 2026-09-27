export const name="chat_add_on-fill";
export const id="dl_8de3730b0617339d2ec6";
export const url=new URL("../icons/chat_add_on-fill.svg?v=b386a7eebd31a502bb6bd9a91d042fdfeb938796c77cf75f336b9669a7ebfc4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
