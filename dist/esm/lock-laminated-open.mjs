export const name="lock-laminated-open";
export const id="dl_395f080b06bb497cadab";
export const url=new URL("../icons/lock-laminated-open.svg?v=3cd1c5c32c8bc60f0ba41b70fd98459af992a9d50290192a831248e8318043fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
