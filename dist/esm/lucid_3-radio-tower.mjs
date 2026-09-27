export const name="lucid_3-radio-tower";
export const id="dl_523184d24fa447ab8fc3";
export const url=new URL("../icons/lucid_3-radio-tower.svg?v=098410bc62b5b1d9991da88ff88972d1a59bfd1be2732fb538e33bf80b2886f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
