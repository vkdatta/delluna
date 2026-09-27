export const name="squircle";
export const id="dl_ff515c6eb5714c5abbd9";
export const url=new URL("../icons/squircle.svg?v=2f471bbbd33a1a46229a701f4c6a73034542e97a8cb45ca73fac11b57bf641b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
