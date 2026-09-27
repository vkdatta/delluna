export const name="sentiment_frustrated";
export const id="dl_9c9bfd7fe4423dbec9c6";
export const url=new URL("../icons/sentiment_frustrated.svg?v=e568918be6837f3b6cefe9a2b0f99414e333d8f013d6e9b30355c2729c0027e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
