export const name="tonality_2";
export const id="dl_4cdbccbec9563ff3a636";
export const url=new URL("../icons/tonality_2.svg?v=c10851f647821aac786b550e93c5d54357cac4c9151f2212e850e6636be0e67c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
