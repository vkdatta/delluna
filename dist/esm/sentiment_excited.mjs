export const name="sentiment_excited";
export const id="dl_8eb411324bb04ed5b612";
export const url=new URL("../icons/sentiment_excited.svg?v=2923dee2775e33213c44f3be783405a478a13c502251066c110764fe22858255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
