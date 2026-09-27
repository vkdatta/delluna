export const name="lucid_1-circle-play";
export const id="dl_c129d1df63ac41b99df1";
export const url=new URL("../icons/lucid_1-circle-play.svg?v=d7fefac5b6824ca96e5ce7ff6a6cca0c7908b45760b487fac2877cfb7821f95e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
