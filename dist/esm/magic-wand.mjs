export const name="magic-wand";
export const id="dl_6dfe07cc59e74248a784";
export const url=new URL("../icons/magic-wand.svg?v=027cc77f0654580e978763c8ca81faf9624d407c1d9f454a86443df3f43b7842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
