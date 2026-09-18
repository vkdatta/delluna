export const name="sentiment_very_satisfied-fill";
export const id="dl_11a94c89d6184111ae66";
export const url=new URL("../icons/sentiment_very_satisfied-fill.svg?v=40fbb4019525880538034e2412a1c8f90d6444052c80054d7596420ff4510769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
