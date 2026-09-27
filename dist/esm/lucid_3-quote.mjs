export const name="lucid_3-quote";
export const id="dl_6847b565bbfe4df89937";
export const url=new URL("../icons/lucid_3-quote.svg?v=df42fdc00db63b333d3c449e27d1754ba391b32961075d281f6463e31cf15c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
