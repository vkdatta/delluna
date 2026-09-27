export const name="sentiment_calm-fill";
export const id="dl_539495eb743dadf31f28";
export const url=new URL("../icons/sentiment_calm-fill.svg?v=8724fc05c36f49c95e74c614e38e0ddaf9efd5ee50fbc5c63a76e3637bc07983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
