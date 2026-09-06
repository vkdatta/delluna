export const name="flag-pennant-fill";
export const id="dl_d3a1597b9ee0466fbb34";
export const url=new URL("../icons/flag-pennant-fill.svg?v=fb36cd3cbc8dac4a0515c8ed4180d9f0b23fc3ee4152a6433a8b99a6d0307037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
