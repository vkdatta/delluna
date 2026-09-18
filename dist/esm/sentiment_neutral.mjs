export const name="sentiment_neutral";
export const id="dl_d2c245cd6ace4114a456";
export const url=new URL("../icons/sentiment_neutral.svg?v=fa9b14a20121a2867f828a164be639262f1b5651da369289b39add9f6300bcd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
