export const name="lucid_1-check";
export const id="dl_19037d8510ca4be0a45a";
export const url=new URL("../icons/lucid_1-check.svg?v=dfe35d2f57f4de8509a7a8f0929c6b88d6325cd90d065536ae230a737a075c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
