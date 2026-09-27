export const name="lucid_3-phone-forwarded";
export const id="dl_f5a2feca375147799c84";
export const url=new URL("../icons/lucid_3-phone-forwarded.svg?v=d129d1d95c31f376ef3bae80f7508cba5906f3153e676d1ea3d7bc8a149929ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
