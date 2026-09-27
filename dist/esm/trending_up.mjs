export const name="trending_up";
export const id="dl_45509fc4f828794c5ecf";
export const url=new URL("../icons/trending_up.svg?v=d447f81afabd7ae38cbbd57b8f37cdc46921d65ff4109b57a3fc8adfefb6fbf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
