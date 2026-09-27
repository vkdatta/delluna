export const name="bento";
export const id="dl_cff2971720cbd3cda2f3";
export const url=new URL("../icons/bento.svg?v=f651bf5ee39990b3f4a111439403dc2ae9743c8217b66d76ba3bcadfc25b695d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
