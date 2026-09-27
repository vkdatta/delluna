export const name="sentiment_content";
export const id="dl_7cd7123bc50c11689a28";
export const url=new URL("../icons/sentiment_content.svg?v=cbc676a04bb1aa000ddf3b2bb45c4072a5fa156387d8b6887917bae9ca61e6c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
