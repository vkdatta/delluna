export const name="send_money-fill";
export const id="dl_843cdb3e8d2710301413";
export const url=new URL("../icons/send_money-fill.svg?v=9ac84a0a424f9617ebfc80174aaffc131ea43c0f5e021fe35559554a7d711518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
