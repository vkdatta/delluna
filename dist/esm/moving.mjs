export const name="moving";
export const id="dl_554b777b42af4f549dc7";
export const url=new URL("../icons/moving.svg?v=f07639b6d2b4185a3874d0a352478c97c84a70188afeba3126ffb2620cfaaad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
