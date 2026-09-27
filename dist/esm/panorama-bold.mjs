export const name="panorama-bold";
export const id="dl_108f6512875248e58401";
export const url=new URL("../icons/panorama-bold.svg?v=c7bf262a87345113f5be0dba7c016ad6e1a1a50299ff4ece789be5b904c73389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
