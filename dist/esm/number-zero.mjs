export const name="number-zero";
export const id="dl_4ce6867c8a8545d9a496";
export const url=new URL("../icons/number-zero.svg?v=3cda52d5c6da31fce71b537c64cdeffeb42b1391ec6c737c314911e3acf1167a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
