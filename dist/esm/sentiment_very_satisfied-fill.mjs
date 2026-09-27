export const name="sentiment_very_satisfied-fill";
export const id="dl_8205cd9c1588672fa17f";
export const url=new URL("../icons/sentiment_very_satisfied-fill.svg?v=a69bc6d665efbe5ce8a570db5fa11f7a56344f4215bb86b7b9d666c93e8baeb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
