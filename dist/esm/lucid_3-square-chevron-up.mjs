export const name="lucid_3-square-chevron-up";
export const id="dl_e88bdd2bcd4546febbf8";
export const url=new URL("../icons/lucid_3-square-chevron-up.svg?v=9e8a69882d95474e34f47df0c0c358ed446d8191f1ed0b957b99956e699e7bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
