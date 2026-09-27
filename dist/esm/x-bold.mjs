export const name="x-bold";
export const id="dl_ce8b5eefffaed7069c6b";
export const url=new URL("../icons/x-bold.svg?v=f1d4803eee7762f08134549a779a5a910d94c173f0e7a178f4f50932fd5234d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
