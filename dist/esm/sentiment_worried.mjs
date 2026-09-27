export const name="sentiment_worried";
export const id="dl_9ec64cdc20dd26263c9d";
export const url=new URL("../icons/sentiment_worried.svg?v=767f131bff1ffe03b8be588b33b8a95b07a098569d00ebf26fd374b59e4798b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
