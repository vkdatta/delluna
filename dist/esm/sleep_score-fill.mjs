export const name="sleep_score-fill";
export const id="dl_a61443dd48cfee4e8914";
export const url=new URL("../icons/sleep_score-fill.svg?v=7d6b652bd199ad25eca89ab7624e73e63b1cbc8176989a32732b234336225eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
