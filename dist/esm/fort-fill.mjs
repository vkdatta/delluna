export const name="fort-fill";
export const id="dl_2085e66e4c22710c809f";
export const url=new URL("../icons/fort-fill.svg?v=55df0b52440f45d27c50c71886c4de755e70f180483b28d2c1dedccb65e5aee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
