export const name="person-simple-swim-bold";
export const id="dl_b56006a5def845aea542";
export const url=new URL("../icons/person-simple-swim-bold.svg?v=da2cdcaa58f614beeed0b7d29052124f6df824bfefdfee1a71acf94b72175eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
