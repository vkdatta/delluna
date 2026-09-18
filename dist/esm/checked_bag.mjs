export const name="checked_bag";
export const id="dl_9e0f578ac45f493abf3f";
export const url=new URL("../icons/checked_bag.svg?v=39a8c79782e9be4e8b0bbabcd58f3590d37ea1e8430f8c57c2ed39ae014caa86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
