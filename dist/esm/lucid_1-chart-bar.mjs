export const name="lucid_1-chart-bar";
export const id="dl_287bd184d9504a00bc93";
export const url=new URL("../icons/lucid_1-chart-bar.svg?v=22b68727a55547718b5a7b5d3cc0eef490f38ae5ab20796acd71d7976daff4a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
