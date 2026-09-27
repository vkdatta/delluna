export const name="ifl";
export const id="dl_a28c6454f8af3825d74c";
export const url=new URL("../icons/ifl.svg?v=072fcc92829fd016d82aeb21e2d44e9031fc18470b4832f26bc34154e71ab618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
