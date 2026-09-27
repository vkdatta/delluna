export const name="tally-1";
export const id="dl_4d5039e8d19e4d4db50c";
export const url=new URL("../icons/tally-1.svg?v=34d95bc40208b33793eaaabfcdb95f737713be0a6242c809041094667f246fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
