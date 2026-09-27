export const name="lucid_1-cctv";
export const id="dl_f9c03ed5ae5141989a33";
export const url=new URL("../icons/lucid_1-cctv.svg?v=88bbe660491607b296e63bb49a454c87ef3c7f470e074f84258a4648dc664934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
