export const name="lucid_1-arrow-left-right";
export const id="dl_421809b335954aa3a855";
export const url=new URL("../icons/lucid_1-arrow-left-right.svg?v=eedc9700e9cedbf551bff716ebbef7ea00150710f937a447df8cea6281235711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
