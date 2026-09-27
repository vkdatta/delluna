export const name="arrow-line-right";
export const id="dl_ab38a6e54826459f9a41";
export const url=new URL("../icons/arrow-line-right.svg?v=ac29c2932cba1534e56f3f03a688086d44570fcbaa0525997813b378a666df78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
