export const name="sentiment_frustrated";
export const id="dl_885bd71cf32e29de9f93";
export const url=new URL("../icons/sentiment_frustrated.svg?v=fc8f5bd4f30d0420543f83d70e4e9edd358fed0963ac7c323662430989435234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
