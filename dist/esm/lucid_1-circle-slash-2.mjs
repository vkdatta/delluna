export const name="lucid_1-circle-slash-2";
export const id="dl_9edf2df2a2b845628538";
export const url=new URL("../icons/lucid_1-circle-slash-2.svg?v=e61ec6b260aedd45b29d17bd230c5e582c519c8ddd544b42bd2f94911928d4bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
