export const name="sentiment_extremely_dissatisfied";
export const id="dl_0e67faaab17bd1e6d992";
export const url=new URL("../icons/sentiment_extremely_dissatisfied.svg?v=16650d9e335ac6ce493870b862cfaeb9a46552b05593d03721c2a73ec88708c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
