export const name="bird-light";
export const id="dl_f77255d827a44f9bb2bd";
export const url=new URL("../icons/bird-light.svg?v=6b4850ca2acc9a164e0e0ef86ee040270a8ca5240d0d97ab80466de1765cbcf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
