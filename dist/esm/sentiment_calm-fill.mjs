export const name="sentiment_calm-fill";
export const id="dl_6c56c1dfc9c640d3989f";
export const url=new URL("../icons/S/sentiment_calm-fill.svg?v=008ee87512b1cf5b4711f9baea05a7bdcfaf88ac7c4b9309723a02b3f5578f0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
