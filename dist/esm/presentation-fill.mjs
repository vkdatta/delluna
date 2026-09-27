export const name="presentation-fill";
export const id="dl_e7e79fc3be3949d9952f";
export const url=new URL("../icons/presentation-fill.svg?v=47c35325aa6c8d2f6c7c81f14cc49d4e751a850095629b714c569c781c4103f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
