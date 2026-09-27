export const name="cruelty_free-fill";
export const id="dl_acd75c06c1dad778c1c5";
export const url=new URL("../icons/cruelty_free-fill.svg?v=890812f02b392bd81e126c0b78d273a87fd2d46defef2f8017d7db35f8789a96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
