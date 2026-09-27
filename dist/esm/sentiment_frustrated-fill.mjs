export const name="sentiment_frustrated-fill";
export const id="dl_d8a3a5723bf2246b2ea0";
export const url=new URL("../icons/sentiment_frustrated-fill.svg?v=990a8135067d4cba3bd44785d38b21ddd0467fca119fb9658aa8a02e7a527a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
