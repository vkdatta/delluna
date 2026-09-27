export const name="trash-simple-bold";
export const id="dl_8d1f55f1c0b1aa635b31";
export const url=new URL("../icons/trash-simple-bold.svg?v=9196d31e580bfe3cbce266b1d96a15487cd3773e0546904116f5fd1f59d6400c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
