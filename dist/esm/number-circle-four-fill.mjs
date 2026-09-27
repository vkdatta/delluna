export const name="number-circle-four-fill";
export const id="dl_b5efa43766d64190b9e9";
export const url=new URL("../icons/number-circle-four-fill.svg?v=0226a2fb4841288e126d360b27f0b6481e39e28e8d96b1d70c8c9a6db9b39119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
