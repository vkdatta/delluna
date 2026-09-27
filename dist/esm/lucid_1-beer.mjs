export const name="lucid_1-beer";
export const id="dl_0232d09c336b4e109320";
export const url=new URL("../icons/lucid_1-beer.svg?v=33bbaa52f2ead659757188577d81ad777e7d7f1a8524ef2dc9c12f3a280798c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
