export const name="sentiment_calm";
export const id="dl_4455ed090642a5ab30f4";
export const url=new URL("../icons/sentiment_calm.svg?v=b72d08aaf779758a5c57b50b6ef24db3b90c7f6cd2264d000b04ccc69293507d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
