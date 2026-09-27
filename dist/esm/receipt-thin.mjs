export const name="receipt-thin";
export const id="dl_61814b69cb5147bcbbea";
export const url=new URL("../icons/receipt-thin.svg?v=018cd58f7d082979701b0f022b579f6538829c74245b5a92c8bbe3c767e3456d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
