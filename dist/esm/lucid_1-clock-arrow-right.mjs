export const name="lucid_1-clock-arrow-right";
export const id="dl_0de566338084456581ac";
export const url=new URL("../icons/lucid_1-clock-arrow-right.svg?v=b715ed46dbfddeed06da843b454b735f4d4b26ce84c52cd1034319a2680a72b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
