export const name="lucid_1-beer";
export const id="dl_0232d09c336b4e109320";
export const url=new URL("../icons/lucid_1-beer.svg?v=6ec6e7365b7d7b2735b2664c618c917384ff88c1450a537e774e14cb40c5e01c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
