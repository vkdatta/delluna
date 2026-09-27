export const name="sentiment_satisfied";
export const id="dl_9d13c919efc98923b4e5";
export const url=new URL("../icons/sentiment_satisfied.svg?v=1ee9fb5ab598c8f7b4afa446f9b0e28e27b608997d611fbd7012f0cd5eb008c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
