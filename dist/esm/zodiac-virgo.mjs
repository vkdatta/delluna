export const name="zodiac-virgo";
export const id="dl_60a37129485a4571b8dd";
export const url=new URL("../icons/zodiac-virgo.svg?v=2b33d16ae0ad02f1418ecce64f0d56d4fc3f4bdb477c909a91beb8b434cb8b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
