export const name="infinity-fill";
export const id="dl_b1ddef7fb66346b6863a";
export const url=new URL("../icons/infinity-fill.svg?v=a1b77fa5ca7f0cb1437142cb33705835307d691a411892e69df2e12ee1e188d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
