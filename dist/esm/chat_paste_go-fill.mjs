export const name="chat_paste_go-fill";
export const id="dl_368dbb172cc115846778";
export const url=new URL("../icons/chat_paste_go-fill.svg?v=86788492eaf3ea902aea42b606a5dc2c0b51533611af53d590886a53fbe4573c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
