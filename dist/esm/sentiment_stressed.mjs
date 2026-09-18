export const name="sentiment_stressed";
export const id="dl_da2758f0cebb4ea1aa08";
export const url=new URL("../icons/sentiment_stressed.svg?v=daeeaab92f9710c77df73bde8a55793909157ab93b6da29eb21360cdc87aa993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
