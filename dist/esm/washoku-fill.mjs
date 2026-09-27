export const name="washoku-fill";
export const id="dl_d7fa6d67c7d4f48dff2c";
export const url=new URL("../icons/washoku-fill.svg?v=eb337b0aa2730e152da5b71a797a09e7cb8156b93671af6582842c0716c4c5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
