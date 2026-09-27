export const name="counter_5-fill";
export const id="dl_0667ddf1718e18612e42";
export const url=new URL("../icons/counter_5-fill.svg?v=26beeb535733b7aeaf20569dd00ca8819368a703d8d7bf6601f4891e46e8dd1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
