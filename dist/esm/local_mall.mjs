export const name="local_mall";
export const id="dl_029457fba5bf7fe801c4";
export const url=new URL("../icons/local_mall.svg?v=b469f6c4075268fdbdfc5bcbe4e0169e0313ad43f1a904e8ea360e28171101d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
