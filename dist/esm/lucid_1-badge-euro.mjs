export const name="lucid_1-badge-euro";
export const id="dl_c3fd940a1e25429eada7";
export const url=new URL("../icons/lucid_1-badge-euro.svg?v=18c944f8d0ac2c1fb08c0dfa14294c34fcb49441eab5a4d111cbc47141e15825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
